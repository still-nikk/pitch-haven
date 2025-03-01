"use server";

import { writeClient } from "@/sanity/lib/write-client";
import { revalidatePath } from "next/cache";

export const incrementViews = async (id: string) => {
  if (!id) return;

  try {
    // Fetch current views from Sanity
    const { views } = await writeClient.fetch(`*[_id == $id][0] { views }`, { id });

    // Update the view count in Sanity
    await writeClient.patch(id).set({ views: (views || 0) + 1 }).commit();

    // Revalidate the page to reflect updated views
    revalidatePath(`/your-route/${id}`); // Adjust to match your actual route
  } catch (error) {
    console.error("Error incrementing views:", error);
  }
};
