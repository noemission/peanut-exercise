import { IoIosHeartEmpty } from 'react-icons/io';
import { FaRegComment } from 'react-icons/fa';
import { TiArrowRightOutline } from 'react-icons/ti';

type PostData = {
  likesCount?: number;
  commentsCount?: number;
};
export default function PostActions({ likesCount, commentsCount }: PostData) {
  return (
    <div className="flex">
      <div className="
      cursor-pointer p-3 h-12 flex items-center justify-center gap-1 bg-peanut-pink-light rounded-full">
        <IoIosHeartEmpty
          className="h-full w-auto"
          color="black"
          strokeWidth="10px"
        />
        <span className="font-bold text-lg h-full">{likesCount}</span>
      </div>
      <div className="cursor-pointer p-3 h-12 flex items-center justify-center gap-1 bg-peanut-pink-light rounded-full">
        <FaRegComment className="h-full w-auto" color="black" />
        <span className="font-bold text-lg h-full">{commentsCount}</span>
      </div>

      <div className="flex-grow"></div>
      <div className="cursor-pointer p-2 px-3 h-12 flex items-center justify-center gap-1 bg-peanut-pink-light rounded-full">
        <TiArrowRightOutline
          className="h-full w-auto opacity-70"
          color="black"
        />
      </div>
    </div>
  );
}
