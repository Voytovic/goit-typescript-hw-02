import React from "react";
import css from "./ImageCard.module.css";

interface Image {
  urls: {
    small: string;
  };
  description: string;
}

interface Props {
  item: Image;
  openModal: (item: Image) => void;
}

const ImageCard: React.FC<Props> = ({ item, openModal }) => {
  const handleClick = () => {
    openModal(item);
  };

  return (
    <div className={css.imgItem}>
      <img
        className={css.img}
        src={item.urls.small}
        alt={item.description}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
