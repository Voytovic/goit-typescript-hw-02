import ImageCard from "../imageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../../types";
import React from "react";

interface ImageCardProps {
  images: Image[];
  openModal: (id: string) => void;
}

const ImageGallery: React.FC<ImageCardProps> = ({ images, openModal }) => {
  return (
    <ul className={css.gallery}>
      {Array.isArray(images) &&
        images.map((image) => {
          return (
            <li className={css.gallaryItem} key={image.id}>
              <ImageCard image={image} openModal={openModal} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
