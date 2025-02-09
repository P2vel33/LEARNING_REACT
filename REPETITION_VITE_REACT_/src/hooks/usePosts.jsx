import React, { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return sortPosts;
};

export const usePosts = (posts, sort, search) => {
  const sortPosts = useSortedPosts(posts, sort);
  const searchAndSortedPosts = useMemo(() => {
    return sortPosts.filter((post) =>
      post.title.toLowerCase().includes(search)
    );
  }, [sortPosts, search]);
  return searchAndSortedPosts;
};
