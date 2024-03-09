import fetchSuggestedBlogs from '../../lib/blog/suggested';
import MoreArticles from './MoreArticles';
import PostActions from './PostActions';
import PostHeader from './PostHeader';
import PostMainText from './PostMainText';
import Related from './Related';
import SocialIcons from './SocialIcons';
import calculateReadingTime from '../../utils/calculateReadingTime';
import { SinglePost } from 'types';

type Props = {
  post: SinglePost;
  slug: string;
};

export default async function Post({ post, slug }: Props) {
  const suggestions = await fetchSuggestedBlogs({ slug, page: 1 });
  return (
    <div>
      <article className="max-w-6xl mx-auto flex flex-col mt-5 md:mt-14">
        <PostHeader
          category="Peanut blog / Motherhood"
          author={{ name: post.author.name, avatar: post.author.avatar_url }}
          title={post.header.title}
          publishDate={new Date(post.published_at)}
          image={post.hero_image_url}
          readingTime={calculateReadingTime(post.body)}
        />

        <section className="mx-auto flex flex-col gap-6 px-4 md:px-2 md:flex-row mt-5 md:mt-20">
          <SocialIcons />
          <Related related={post.related_articles} />
          <PostMainText text={post.body}>
            <PostActions commentsCount={21} likesCount={8} />
          </PostMainText>
        </section>
      </article>
      <MoreArticles articles={suggestions.pages} page={1} />
    </div>
  );
}
