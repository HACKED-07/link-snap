"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  return (
    <div>
      Enter url:
      <input
        type="url"
        placeholder="Enter here:"
        onChange={(e) => setUrl(e.target.value)}
      />
      <br />
      <button
        onClick={async () => {
          const resp = await fetch("/api/shorten", {
            method: "POST",
            body: JSON.stringify({
              originalUrl: url,
            }),
          });
          const newUrl = (await resp.json()).generatedUrl;
          console.log(newUrl);
          window.open(newUrl, "_blank");
        }}
      >
        Submit
      </button>
    </div>
  );
}
