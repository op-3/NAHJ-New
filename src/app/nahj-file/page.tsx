"use client";

import { useState, useEffect } from "react";

export default function NahjFilePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted ? (
        <iframe
          src="/nahj file.pdf"
          className="w-full h-screen"
          title="NAHJ File PDF Viewer"
        />
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <p>Loading PDF...</p>
        </div>
      )}
    </>
  );
}
