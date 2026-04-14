"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    grecaptcha: {
      render: (
        container: HTMLElement,
        params: { sitekey: string; callback: (token: string) => void; "expired-callback": () => void }
      ) => number;
      reset: (widgetId: number) => void;
    };
  }
}

export default function CaptchaWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function renderWidget() {
      if (!containerRef.current || widgetIdRef.current !== null) return;
      if (typeof window.grecaptcha?.render !== "function") return;

      widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
        sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "",
        callback: (token: string) => {
          if (inputRef.current) inputRef.current.value = token;
        },
        "expired-callback": () => {
          if (inputRef.current) inputRef.current.value = "";
        },
      });
    }

    // grecaptcha may already be loaded or may load later
    if (window.grecaptcha?.render) {
      renderWidget();
    } else {
      const interval = setInterval(() => {
        if (window.grecaptcha?.render) {
          renderWidget();
          clearInterval(interval);
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div>
      <input type="hidden" name="captchaToken" ref={inputRef} />
      <div ref={containerRef} />
    </div>
  );
}
