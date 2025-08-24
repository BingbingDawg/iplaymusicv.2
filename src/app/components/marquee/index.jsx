import { useRef, useEffect, useState } from "react";

export default function ScrollingText({ text, containerWidth = 32 }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [shouldScroll, setShouldScroll] = useState(false);
  const [duration, setDuration] = useState(8); // seconds

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const containerW = containerRef.current.offsetWidth;
      const textW = textRef.current.scrollWidth;

      if (textW > containerW) {
        setShouldScroll(true);

        const speed = 50; // px per second
        setDuration(textW / speed);
      } else {
        setShouldScroll(false);
      }
    }
  }, [text]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden whitespace-nowrap"
      style={{ width: `${containerWidth * 4}px` }}
    >
      {shouldScroll ? (
        <div
          className="inline-flex"
          style={{ animation: `marquee ${duration}s linear infinite` }}
        >
          <span ref={textRef} className="inline-block">{text}</span>
          <span className="inline-block w-8" /> {/* gap */}
          <span className="inline-block">{text}</span>
        </div>
      ) : (
        <span ref={textRef} className="inline-block">{text}</span>
      )}
    </div>
  );
}
