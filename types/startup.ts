export type StartupCardType = {
  _id: string;
  _createdAt: string;
  title: string | null;
  slug?: {
    current?: string;
  } | null;
  views: number | null;
  description: string | null;
  image: string | null;
  category: string | null;
  author?: {
    _id: string;
    name: string | null;
    image: string | null;
  } | null;
};
