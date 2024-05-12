import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";
import { getImagesByQuery } from "./components/services/Api";
import ImageGallery from "./components/imageGallery/ImageGallery";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/imageModal/ImageModal";
import { Image } from "./types";
import React from "react";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [btnLoadMore, setBtnLoadMore] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Image | null>(null);

  useEffect(() => {
    if (query.length === 0) return;

    const fetchImages = async () => {
      try {
        const data = await getImagesByQuery(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setBtnLoadMore(data.total_pages > page);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const onSetSearchQuery = (searchTerm: string): void => {
    setQuery(searchTerm);
    setIsLoading(true);
    setError(false);
    setImages([]);
  };
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const openModal = (id: string): void => {
    const imageModal = images.filter((image) => image.id === id)[0];
    setModalImage(imageModal);
    setIsOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div>
      <SearchBar onSetSearchQuery={onSetSearchQuery} toast={toast} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {btnLoadMore && <LoadMoreBtn loadMore={loadMore} images={images} />}
      <ImageModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        modalImage={modalImage}
      />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
