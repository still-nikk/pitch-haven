import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { client } from "../sanity/lib/client";
import { writeClient } from "../sanity/lib/write-client";
import { AUTHOR_BY_GITHUB_ID } from "../sanity/lib/queries";

// Extend default User type
interface ExtendedUser {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  username: string;
  bio: string;
}

// Sanity Author creation type
interface SanityAuthor {
  _type: "author";
  id: string;
  name: string | null;
  username: string;
  email: string | null;
  image: string | null;
  bio: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
      profile(profile) {
        return {
          id: String(profile.id),
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
          username: profile.login,
          bio: profile.bio ?? "",
        } as ExtendedUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          username: profile.email.split("@")[0], // or generate something
          bio: "", 
        } as ExtendedUser;
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { id, name, email, image, username, bio } = user as ExtendedUser;

      const existingUser = await client.fetch(AUTHOR_BY_GITHUB_ID, { id });
      if (!existingUser) {
        const newAuthor: SanityAuthor = {
          _type: "author",
          id,
          name,
          username,
          email,
          image,
          bio,
        };
        await writeClient.create(newAuthor);
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        const extendedUser = user as ExtendedUser;
        token.id = extendedUser.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && typeof token.id === "string") {
        (session.user as { id?: string }).id = token.id;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Redirect to the homepage after successful login
      return baseUrl; // This will redirect users to the homepage
    },
  },
});
