import React from "react";
import ImageCard, { Image } from "../imageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Props {
  items: Image[]; // Припускаючи, що items містить масив об'єктів типу Image
  openModal: (item: Image) => void;
}

const ImageGallery: React.FC<Props> = ({ items, openModal }) => (
  <ul className={css.gallery}>
    {items.map((item) => (
      <li className={css.galleryItem} key={item.id}>
        <ImageCard item={item} openModal={() => openModal(item)} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
