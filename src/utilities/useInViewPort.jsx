import { useState, useEffect, useMemo } from "react";
//In React components must be capitalized and custom hooks must start with use
function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setTimeout(() => {
          setIsIntersecting(entry.isIntersecting);
        }, 100)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

export default useIsInViewport;
