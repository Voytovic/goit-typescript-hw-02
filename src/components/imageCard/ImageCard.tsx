import css from "./ImageCard.module.css";
import { Image } from "../../types";
import React from "react";

interface ImageCardProps {
  image: Image;
  openModal: (id: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, openModal }) => {
  return (
    <div className={css.imgContainer}>
      <img
        onClick={() => openModal(image.id)}
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
