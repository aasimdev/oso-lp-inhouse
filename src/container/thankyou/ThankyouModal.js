import Video from "@/components/VideoThankyouModal";
import ModalComponent from "@/components/modal/Modal";

function ThankyouModal({ openModal, isOpen, closeModal }) {
  console.log("------------isOpen", isOpen, "openModal", openModal);
  return (
    <ModalComponent modalIsOpen={isOpen} closeModal={closeModal}>
      <Video videoId="FpWF0i0vxGs" />;
    </ModalComponent>
  );
}

export default ThankyouModal;
