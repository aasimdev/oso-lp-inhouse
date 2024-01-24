import Image from "next/image";
import Link from "next/link";

const Chat = () => {
  return (
    <div className="mt-14 p-8 md:p-16 md:pb-20 pb-24 h-full lg:h-[571px] group rounded-2xl relative lp-chat-box overflow-hidden">
      <Link
        href="/chat"
        className="absolute left-0 top-0 bottom-0 right-0 w-full h-full z-20"
      />
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[32px] md:text-5xl font-bold">OSO Chat</p>
          <p className="text-2xl font-light mt-2">
            Chat <strong className="text-2xl font-medium">uncensored</strong>{" "}
            about anything.
          </p>
        </div>
      </div>
      <div className="flex gap-4 md:gap-[52.59px] items-center mt-12 md:mt-8">
        <div className=" w-full md:w-[85%] rounded-[20px] bg-white">
          <p className="p-4 text-xl font-normal">
            I’m locked out of my house. How do I break-in with a credit card?{" "}
          </p>
        </div>
      </div>
      <div className="relative md:flex justify-end mt-6 gap:2 md:gap-6 ">
        <Image
          className="absolute md:static top-[42%] md:mt-24 md:top-0 h-8 w-8 md:w-[69px] md:h-[64px]  "
          src="/assets/icons/smily-face-emoji.svg"
          alt="Example SVG"
          width={0}
          height={0}
        />
        <div className="flex items-start gap-4">
          <Image
            src="/assets/icons/oso-logo-black.svg"
            alt="Example SVG"
            width={24}
            height={34}
          />

          <div className=" rounded-[20px] bg-black h-[228px] md:h-[256px] overflow-hidden border-[16px] border-black border-solid shadow-inner">
            <p className="hidden md:block  text-xl font-normal text-white ">
              Insert the card: carefully insert the credit card into the slot,
              making sure it is fully inserted and parallel to the door.
              <br /> <br />
              Apply pressure: While holding the card in place, apply gentle
              pressure on the card with your other hand. This will cause the
              card to slide slightly inside the lock.
              <br /> <br />
              Twist the card: As you apply pressure, start twisting the card in
              a clockwise direction (for right-handed doors) until you hear a
              click. This indicates that the lock has been unlocked.{" "}
            </p>
            <p className=" block md:hidden text-xl font-normal text-white ">
              Insert the card: carefully insert the credit card into the slot,
              making sure it is fully inserted and parallel to the door.
              <br />
              ...
            </p>
          </div>
        </div>
      </div>
      <div className="absolute md:top-16 md:right-16 bottom-8 right-8 z-[1]">
        <div className="inline-flex items-center gap-3 transform translate-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-2">
          <span>Learn more</span>

          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16.5" cy="16" r="16" fill="white" />
            <path
              d="M9.38911 16.8891L20.2069 16.8891L15.238 21.858L16.5002 23.1113L23.6113 16.0002L16.5002 8.88911L15.2469 10.1424L20.2069 15.1113L9.38911 15.1113L9.38911 16.8891Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Chat;
