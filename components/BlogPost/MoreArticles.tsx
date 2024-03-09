'use client';

import { Fragment, useEffect, useState } from 'react';
import PostPreview from './PostPreview';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import SkeletonLoader from './SkeletonLoader';
import useMediaQuery from '../../hooks/useMediaQuery';
import { SinglePost } from 'types';

export const getData = async (page: number) => {
  const res = await fetch(`/blog/1/suggested?page=${page}`);
  const data = await res.json();

  return data;
};

export default function MoreArticles({
  articles,
  page: initialPage,
}: {


  
  articles: SinglePost[];
  page: number;
}) {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)');
  const ITEMS_IN_VIEW = isSmallDevice ? 7 : 3;

  const [data, setData] = useState(articles);
  const [page, setPage] = useState(initialPage);
  const [lastPage, setLastPage] = useState(false);
  const [pagination, setPagination] = useState({
    start: 0,
    end: ITEMS_IN_VIEW,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPagination({
      start: 0,
      end: ITEMS_IN_VIEW,
    });
  }, [ITEMS_IN_VIEW]);

  const renderedView = data.slice(pagination.start, pagination.end);

  const hasMore = !(lastPage && pagination.end >= data.length);

  const next = async () => {
    if (loading) return;
    if (!lastPage && pagination.end + ITEMS_IN_VIEW > data.length) {
      // time to fetch more!
      setLoading(true);
      const freshData = await getData(page + 1);
      setData((current) => [...current, ...freshData.pages]);
      setPage(page + 1);
      setLastPage(freshData.last_page);
      setLoading(false);
    }

    setPagination((current) => {
      return {
        start: current.start + ITEMS_IN_VIEW,
        end: current.end + ITEMS_IN_VIEW,
      };
    });
  };
  const prev = async () => {
    if (loading) return;
    setPagination((current) => {
      return {
        start: current.start - ITEMS_IN_VIEW,
        end: current.end - ITEMS_IN_VIEW,
      };
    });
  };

  return (
    <div className="bg-peanut-pink-light mt-9">
      <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-2">
        <h3 className="text-lg font-black mt-12 mb-8 md:text-center md:font-bold md:text-2xl">
          Read more from Peanut
        </h3>
        <div className="relative flex flex-col gap-5 mb-12 md:flex-row md:gap-10 md:justify-center">
          {renderedView.map((item, i) => (
            <Fragment key={item.slug}>
              <PostPreview post={item} />
              {i !== renderedView.length - 1 && (
                <div className="ml-20 border border-black border-opacity-10 md:hidden"></div>
              )}
            </Fragment>
          ))}
          { loading && <SkeletonLoader/> }
        </div>
        <div className="hidden md:flex justify-center gap-4 mb-14">
          <button
            className="bg-peanut-pink-400 p-2 text-2xl rounded-xl disabled:opacity-40"
            disabled={pagination.start === 0 || loading}
            onClick={prev}
          >
            <IoIosArrowBack />
          </button>
          <button
            disabled={!hasMore || loading}
            className="bg-peanut-pink-400 p-2 text-2xl rounded-xl disabled:opacity-40"
            onClick={next}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}
