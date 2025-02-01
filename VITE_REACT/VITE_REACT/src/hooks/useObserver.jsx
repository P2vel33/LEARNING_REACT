import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
  const observer = useRef();

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    let cb = (entries, observer) => {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading]);
};

// useEffect(() => {
//   if (isPostLoading) return;
//   if (observer.current) observer.current.disconnect();
//   let cb = (entries, observer) => {
//     if (entries[0].isIntersecting && page < totalPages) {
//       setPage(page + 1);
//       console.log(page);
//     }
//   };
//   observer.current = new IntersectionObserver(cb);
//   observer.current.observe(lastElement.current);
// }, [isPostLoading]);
