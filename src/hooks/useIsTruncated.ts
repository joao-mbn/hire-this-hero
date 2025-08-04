import { useEffect, useRef, useState } from "react";

export function useIsTruncated<T extends HTMLElement = HTMLElement>() {
  const elementRef = useRef<T>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  const checkTruncation = () => {
    if (elementRef.current) {
      const element = elementRef.current;
      setIsTruncated(element.scrollWidth > element.clientWidth);
    }
  };

  useEffect(() => {
    checkTruncation();
    window.addEventListener("resize", checkTruncation);
    return () => window.removeEventListener("resize", checkTruncation);
  }, []);

  return { elementRef, isTruncated, checkTruncation };
}
