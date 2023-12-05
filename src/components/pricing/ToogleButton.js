const ToggleButton = ({ handleToggle, isMonthly }) => {
  return (
    <div className="flex gap-4 justify-center items-center pt-8 m-0 lg:pl-16">
      <div
        className={`${
          !isMonthly
            ? "text-gray-100 font-semibold text-base"
            : "text-purple font-semibold text-base"
        }`}
      >
        Monthly
      </div>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={!isMonthly}
          onChange={handleToggle}
        />
        <div className="relative w-[60px] h-8 bg-purple peer-focus:outline-none rounded-full peer-focus:ring-0 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-purple">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute left-2 top-2 z-10 ${!isMonthly && "left-9"}`}
          >
            <g id="Icons.16">
              <path
                id="icon"
                d="M6.0001 10.7799L3.2201 7.9999L2.27344 8.9399L6.0001 12.6666L14.0001 4.66656L13.0601 3.72656L6.0001 10.7799Z"
                fill="#8E33FF"
              />
            </g>
          </svg>
        </div>
      </label>

      <div
        className={`flex gap-2 justify-center items-center ${
          !isMonthly
            ? "text-purple font-semibold text-base"
            : "text-gray-100 font-semibold text-base"
        }`}
      >
        Annually
        <div className="px-2 py-1 bg-[#D9FFBC] rounded-lg flex-col justify-start items-end gap-2 inline-flex">
          <div className="p-1 justify-center items-center gap-2 inline-flex">
            <div className="text-black text-sm font-semibold font-['Roboto'] leading-snug">
              Save 17%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;
