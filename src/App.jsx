import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import { fetchImages } from "./components/services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import toast from "react-hot-toast";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getData = async () => {
      try {
        const data = await fetchImages(query, page, { signal });
        setImages(data.results);
        console.log(data.hits);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => {
      controller.abort();
    };
  }, [page, query]);
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    setError(false);
  };
  return (
    <Container>
      <SearchBar handleSearch={handleSearch} />
      <ImageGallery />
      <ImageModal />
      <Loader />
    </Container>
  );
};

export default App;
