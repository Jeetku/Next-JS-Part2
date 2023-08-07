"use client";
import Script from "next/script";

export default function page() {
  return (
    <div>
      <Script
        src="/location.js"
        onLoad={() => console.log("file Loaded")}
      ></Script>
      <h1 id="location">Get user Geo Location</h1>
    </div>
  );
}
