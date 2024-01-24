import VideoResource from "../VideoResourceCard";

const OSOWorkCard = ({ bgColor, title, itemCenter, videoID, desc }) => {
  return (
    <div
      className={`${bgColor} min-h-[580px] sm:min-h-0 sm:h-[580px] rounded-2xl overflow-hidden`}
    >
      <div className="">
        <VideoResource videoId={videoID} variant={"osowork"} />
      </div>

      <div className="p-8 relative flex flex-col justify-between h-[calc(100%_-_296px)]">
        <div>
          <h2 className="text-black text-[32px] font-semibold">{title}</h2>
          <div className="sm:max-w-[283px]">
            <span className="text-black text-2xl font-light ">{desc} </span>
          </div>
        </div>
        <div className="mx-w-[251px] text-black text-2xl font-light inline-flex gap-2 items-center mt-6 sm:mt-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="access_time">
              <path
                id="Vector"
                d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"
                fill="black"
              />
            </g>
          </svg>
          1 min
        </div>
      </div>
    </div>
  );
};

export default OSOWorkCard;
