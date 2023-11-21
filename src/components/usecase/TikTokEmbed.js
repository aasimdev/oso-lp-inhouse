const TikTokEmbed = ({ videoId }) => {
  return (
    <div className="overflow-hidden md:mt-6">
      <iframe
        className="border border-gray-50"
        src={`https://www.tiktok.com/embed/v2/${videoId}?lang=en`}
        width="100%"
        height="750"
        allowFullScreen
        style={{ overflow: 'hidden', border: "1px", borderRadius: "16px" }}
      ></iframe>
    </div>
  );
};

export default TikTokEmbed;
