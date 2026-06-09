"use client";

import { useEffect, useState } from "react";

export default function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    async function updateCounter() {
      try {
        const response = await fetch(
          "https://xdnkouyyxk.execute-api.ap-southeast-2.amazonaws.com/dev/views/",
          {
            cache: "no-store",
          }
        );

        const data = await response.json();

        setViews(Number(data));
      } catch (error) {
        console.error("View counter error:", error);
        setViews(null);
      }
    }

    updateCounter();
  }, []);

  return (
    <div className="visualInfo">
      <p>Views</p>
      <strong>{views ?? "—"}</strong>
    </div>
  );
}