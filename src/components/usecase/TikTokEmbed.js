const TikTokEmbed = ({ videoId }) => {
  return (
    <div className="overflow-hidden">
      <iframe
        className=""
        src={`https://www.tiktok.com/embed/v2/${videoId}?lang=en`}
        width="100%"
        height="500"
        allowFullScreen
        style={{ overflow: 'hidden' }}
      ></iframe>
    </div>
  );
};

export default TikTokEmbed;
