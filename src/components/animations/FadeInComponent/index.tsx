"use client";

import React, { useState, useEffect, useRef } from "react";

function FadeInComponent({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <div className={`flex w-full h-full justify-center transition-all duration-1000 ${
      isVisible ? "animate-fadeInUpBounce" : "opacity-0 translate-y-10"
    }`}
      ref={ref}
    >
      {children}
    </div>
  );
}

export default FadeInComponent;
