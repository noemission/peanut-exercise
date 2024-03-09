import { SinglePost } from 'types';

type SuggestedBlogs = {
  pages: SinglePost[];
  last_page: boolean;
};
export default async function fetchSuggestedBlogs({
  page = 1,
}: {
  slug: string;
  page?: number;
}): Promise<SuggestedBlogs> {
  // Since we don't have control over the origin API
  // We need to make adjustments here on how pagination works
  if (page < 1) return { pages: [], last_page: false };
  if (page > 4) return { pages: [], last_page: true };

  // Not using the slug since there is no support from the origin
  const res = await fetch('http://localhost:3002/api/web/posts?page=' + page, {
    next: { revalidate: 60 * 60   } // Revalidate calls to origin once every hour
  });
  const data = await res.json();

  //   Set the fourth page as the last one
  if (page === 4) data.last_page = true;
  return data;
}
