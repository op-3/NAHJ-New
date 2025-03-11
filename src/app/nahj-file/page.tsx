"use client";

import { useState, useEffect } from "react";

export default function NahjFilePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Direct Google Drive embed URL
  const googleDriveEmbedUrl =
    "https://drive.google.com/file/d/1lrRLo5TxovshNrI10bhrE-8Sy6VUSUW_/preview";

  return (
    <>
      {mounted ? (
        <iframe
          src={googleDriveEmbedUrl}
          className="w-full h-screen border-0"
          title="NAHJ File PDF Viewer"
          allowFullScreen
        />
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <p>Loading PDF viewer...</p>
        </div>
      )}
    </>
  );
}
