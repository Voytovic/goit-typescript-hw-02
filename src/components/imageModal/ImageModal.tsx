import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { Image } from "../../types";
import React from "react";

interface ImageModalProps {
  closeModal: () => void;
  modalIsOpen: boolean;
  modalImage: Image | null;
}

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
const ImageModal: React.FC<ImageModalProps> = ({
  closeModal,
  modalIsOpen,
  modalImage,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {modalImage && (
        <div className={css.modalContainer}>
          <div className={css.imgContainer}>
            <img
              className={css.modalImg}
              src={modalImage.urls.regular}
              alt={modalImage.slug}
            />
          </div>
          <div className={css.descContainer}>
            <p className={css.imgDesc}>{modalImage.alt_description}</p>
            <p className={css.imgLikes}>👍: {modalImage.likes}</p>
          </div>
        </div>
      )}
    </Modal>
  );
};
export default ImageModal;
