import fetchSuggestedBlogs from 'lib/blog/suggested';
import { NextRequest } from 'next/server';

// A route handler on "/blog/{slug}/suggested" that will return suggested posts
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get('page');

  const suggestions = await fetchSuggestedBlogs({
    slug: params.slug,
    page: parseInt(page ?? '1'),
  });

  return Response.json(suggestions);
}
