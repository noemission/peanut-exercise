import DynamicImage from './DynamicImage';
import RelativeDate from './RelativeDate';

type Props = {
  category: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  publishDate: Date;
  image: string;
  readingTime: number
};

export default function PostHeader(header: Props) {
  return (
    <>
      <header className="container max-w-3xl mx-auto flex flex-col px-5 mb-7 md:mb-11">
        <p className="font-light text-base mb-4">{header.category}</p>
        <h1 className="font-extrabold text-2xl md:text-4.5xl mb-2">
          {header.title}
        </h1>
        <div className="flex items-center gap-2">
          <DynamicImage
            src={header.author.avatar}
            width="24px"
            aspect="square"
            rounded
          />
          <span className="font-bold text-base">{header.author.name}</span>
          <span>•</span>
          <span className="font-light text-sm text-dark-4">
            <RelativeDate date={header.publishDate} />
            <span>, {header.readingTime} min reading</span>
          </span>
        </div>
      </header>
      <DynamicImage src={header.image} aspect="video" maxHeight="600px" />
    </>
  );
}
