import Post from '@/components/BlogPost/Post';
import fetchPost from 'lib/blog/post';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params):Promise<Metadata> {
  const post = await fetchPost(params.slug);
  if(post) {
    return {
      title: `Post: ${post.header.title}`,
      description: post.description,
    };
  }
  return { title: `Post: ${params.slug}` };
}

export default async function Page({ params }: Params) {
  const post = await fetchPost(params.slug);
  if(!post) notFound();
  return <Post post={post} slug={params.slug}/>;
}
