"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { developer, mailto } from "@/data/portfolio";

const BUBBLE_MS = 2000;

export default function Hero() {
  const [showBubble, setShowBubble] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const greet = () => {
    if (showBubble) return;
    setShowBubble(true);
    timer.current = setTimeout(() => setShowBubble(false), BUBBLE_MS);
  };

  return (
    <section className="section hero" id="hero">
      <div className="hero-wrapper">
        <div className="hero-text">
          <p className="hero-status">Open to new opportunities</p>
          <h1>{developer.name}</h1>
          <p className="hero-headline">{developer.headline}</p>
          <p className="hero-summary lead">{developer.summary}</p>

          <div className="link-group">
            <a href={mailto} className="btn btn-primary">
              Get in touch
            </a>
            <a href="#projects" className="btn">
              View work
            </a>
          </div>
        </div>

        <div className="hero-image">
          <button type="button" className="image-container" onClick={greet} aria-label="Say hi">
            {showBubble && <span className="speech-bubble">Hi! 👋</span>}
            <Image
              src={developer.avatar}
              alt={`${developer.name} profile picture`}
              width={240}
              height={240}
              priority
              className="avatar"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
