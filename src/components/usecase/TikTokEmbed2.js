import React from "react";

const EmbeddedTiktok2 = ({ userName, videoId, category }) => {
  return (
    <>
      <blockquote
        class="tiktok-embed"
        cite={`https://www.tiktok.com/@bayashi.tiktok/video/${videoId}`}
        data-video-id={videoId}
        style={{ maxWidth: "605px", minWidth: "325px" }}
        // data-is-dynamic="false"
        // data-autoplay="true" 
      >
        {" "}
        <section>
          {" "}
          <a
            target="_blank"
            title="@bayashi.tiktok"
            href="https://www.tiktok.com/@bayashi.tiktok?refer=embed"
          >
            {category}
          </a>
        </section>{" "}
      </blockquote>{" "}
    </>
  );
};

export default EmbeddedTiktok2;
