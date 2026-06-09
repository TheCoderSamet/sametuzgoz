"use client";

import { useEffect, useState } from "react";

const API_URL =
  "https://xdnkouyyxk.execute-api.ap-southeast-2.amazonaws.com/dev/views/";

type CounterState = "loading" | "ready" | "unavailable";

export default function ViewCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [state, setState] = useState<CounterState>("loading");

  useEffect(() => {
    async function recordView() {
      try {
        const response = await fetch(API_URL, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Counter request failed");
        }

        const raw = (await response.text()).trim();
        let nextCount: number | null = null;

        try {
          const data = JSON.parse(raw) as number | string | { count?: number; views?: number };

          if (typeof data === "number") {
            nextCount = data;
          } else if (typeof data === "string") {
            const parsed = Number(data);
            if (!Number.isNaN(parsed)) {
              nextCount = parsed;
            }
          } else if (typeof data.count === "number") {
            nextCount = data.count;
          } else if (typeof data.views === "number") {
            nextCount = data.views;
          }
        } catch {
          const parsed = Number(raw);

          if (!Number.isNaN(parsed)) {
            nextCount = parsed;
          }
        }

        if (nextCount === null) {
          throw new Error("Invalid counter response");
        }

        setCount(nextCount);
        setState("ready");
      } catch (error) {
        console.error("View counter error:", error);
        setState("unavailable");
      }
    }

    recordView();
  }, []);

  const displayValue =
    state === "loading"
      ? "..."
      : state === "unavailable"
        ? "—"
        : count?.toLocaleString() ?? "0";

  return (
    <div className="visualCounter">
      <p>Views</p>
      <strong aria-live="polite">{displayValue}</strong>
    </div>
  );
}