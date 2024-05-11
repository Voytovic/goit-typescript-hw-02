import React from 'react';
import css from './ImageModal.module.css';
import Modal from 'react-modal';

interface Image {
  urls: {
    regular: string,
  };
  description: string;
}

interface Props {
  item: Image;
  isOpen: boolean;
  closeModal: () => void;
}

const ImageModal: React.FC<Props> = ({ item, isOpen, closeModal }) => {
  const customStyles: Modal.Styles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '750px',
      height: '750px',
      overflow: 'hidden',
      backgroundColor: '',
      border: 'none',
    },
    overlay: {
      backgroundColor: 'rgba(43, 88, 84, 0.678)',
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <div className={css.wrapper}>
        <img
          className={css.img}
          src={item.urls.regular}
          alt={item.description}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
