export default async function fetchPost(slug:string){
  const post = (await import('../../mainPost.json')).default;
  // Small modifications as the json uses a wrong type of slug
  if(post.slug.replace('blog/', '') === slug) return post;
  return null;
}