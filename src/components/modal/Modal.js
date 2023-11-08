import React from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.48)",
    transition: "background-color 0.3s ease-in-out",
    zIndex: "60",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "8px",
    padding: "0px",
    transform: "translate(-50%, -50%)",
    transition: "transform 0.3s ease-in-out",
    width: "calc(100% - 32px)",
    maxWidth: "800px",
    overflow: "visible",
  },
};

function ModalComponent({
  modalIsOpen,
  modalIsShare,
  closeModal,
  actionBtnLabel,
  children,
}) {
  let subtitle;

  function afterOpenModal() {
    if (subtitle) {
      subtitle.style.color = "#f00";
    }
  }
  return (
    <div>
      {modalIsOpen && (
        <>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <button className="relative top-[-100px] float-right" onClick={closeModal}>
              <div className="w-12 h-12 p-4 bg-gray-50 rounded-[100px] flex-col justify-center items-center gap-2 inline-flex">
                <div className="w-6 h-6 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </button>

            {children}
          </Modal>
        </>
      )}
    </div>
  );
}

export default ModalComponent;
