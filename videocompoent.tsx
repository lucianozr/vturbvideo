"use client";
import { Helmet } from "react-helmet";

import React from "react";
import Script from "next/script";

function VideoPlayer() {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<div id="vid_6599af1261c0ba0009bec224" style="position:relative;width:100%;padding: 56.25% 0 0;"><img id="thumb_6599af1261c0ba0009bec224" src="https://images.converteai.net/ef77f430-1c60-4a45-9150-14d8eb814932/players/6599af1261c0ba0009bec224/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_6599af1261c0ba0009bec224" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div>',
        }}
      />
      <Helmet>
        <script type="text/javascript" id="scr_6599af1261c0ba0009bec224">
          var
          s=document.createElement("script");s.src="https://scripts.converteai.net/ef77f430-1c60-4a45-9150-14d8eb814932/players/6599af1261c0ba0009bec224/player.js",s.async=!0,document.head.appendChild(s);
        </script>
      </Helmet>
    </>
  );
}

export { VideoPlayer };
