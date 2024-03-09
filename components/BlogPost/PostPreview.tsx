import { SinglePost } from 'types';
import DynamicImage from './DynamicImage';

export default function PostPreview({ post }: {post:SinglePost}) {
  return (
    <div className="flex gap-3 items-center md:flex-col">
      <div className="w-full max-w-16 md:max-w-full md:h-52">
        <DynamicImage height="100%" aspect="square" src={post.hero_image_url}/>
      </div>
      <div className="">
        <h4 className="font-bold text-base">{post.heading}</h4>
        <p className="font-normal text-sm">{post.summary}</p>
      </div>
    </div>
  );
}
