const Question = ({ question, answer, isOpen, toggleAccordion }) => {
  return (
    <div className="block relative w-full p-6 bg-gray-40 rounded-lg">
      <button
        type="button"
        className="flex justify-between items-center w-full antialiased select-none transition-colors gap-6"
        onClick={toggleAccordion}
      >
        <p className="text-2xl leading-9 font-normal text-black text-start">{question}</p>
        <span className="flex-grow-0 flex-shrink-0 basis-auto">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
            <g id="arrow_forward_ios">
              <path
                id="Vector"
                d="M4.27 6.11523L2.5 7.88523L12.5 17.8852L22.5 7.88523L20.73 6.11523L12.5 14.3452L4.27 6.11523Z"
                fill="#8E33FF"
              ></path>
            </g>
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden overflow-y-auto transition-max-height duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div
          className="block w-full pt-6 text-gray-700 antialiased pb-0"
          dangerouslySetInnerHTML={{ __html: answer }}
        ></div>
      </div>
    </div>
  );
};

export default Question;
