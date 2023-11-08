import React from "react";
import Video from "@/components/VideoThankyouModal";
import ModalComponent from "@/components/modal/Modal";

function ThankyouModal({ openModal, isOpen, closeModal }) {
  console.log("------------isOpen", isOpen);
  return (
    <ModalComponent modalIsOpen={isOpen} closeModal={closeModal}>
      <Video videoId="FpWF0i0vxGs" />;
    </ModalComponent>
  );
}

export default ThankyouModal;
