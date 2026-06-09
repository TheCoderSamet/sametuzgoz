"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "portfolio-view-recorded";
const API_URL = process.env.NEXT_PUBLIC_VIEW_COUNTER_API;

type CounterState = "loading" | "ready" | "unavailable";

export default function ViewCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [state, setState] = useState<CounterState>("loading");

  useEffect(() => {
    if (!API_URL) {
      setState("unavailable");
      return;
    }

    const recordView = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Counter request failed");
        }

        const raw = (await response.text()).trim();
        let nextCount: number | null = null;

        try {
          const data = JSON.parse(raw) as number | { count?: number };

          if (typeof data === "number") {
            nextCount = data;
          } else if (typeof data.count === "number") {
            nextCount = data.count;
          }
        } catch {
          const parsed = Number(raw);

          if (!Number.isNaN(parsed)) {
            nextCount = parsed;
          }
        }

        if (nextCount !== null) {
          setCount(nextCount);
          sessionStorage.setItem(SESSION_KEY, "true");
        }

        setState("ready");
      } catch {
        setState("unavailable");
      }
    };

    void recordView();
  }, []);

  const displayValue =
    state === "loading" ? "..." : state === "unavailable" ? "—" : count?.toLocaleString() ?? "0";

  return (
    <div className="visualCounter">
      <p>Views</p>
      <strong aria-live="polite">{displayValue}</strong>
    </div>
  );
}
