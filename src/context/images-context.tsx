import React, { useEffect, useState } from "react";
import { ImageData, TagData } from "../interfaces";

export interface ImagesDataContextObj {
  images: ImageData[];
  initialImages: ImageData[];
  removeImage: (id: string) => void;
  unTagImage: (id: string) => void;
  selectedImage: string;
  setSelectedImage: (id: string) => void;
  updateImagesByTags: (tags: TagData[]) => void;
}

export const ImagesContext = React.createContext<ImagesDataContextObj>({
  images: [],
  initialImages: [],
  removeImage: (id: string) => {},
  unTagImage: (id: string) => {},
  selectedImage: "",
  setSelectedImage: (id: string) => {},
  updateImagesByTags: (tags: TagData[]) => {},
});

export const ImagesContextProvider: React.FC = (props) => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [initialImages, setInitialImages] = useState<ImageData[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const page = 1;

  const localImgs = localStorage.getItem("imgs");

  useEffect(() => {
    if (localImgs) {
      setImages(JSON.parse(localImgs));
    }
  }, []);

  const checkLocalStorageData = () => {
    const ls = localStorage.getItem("tags");
    let usedPhotos: string[] = [];
    if (ls) {
      let filtered: TagData[] = JSON.parse(ls).filter(
        (i: TagData) => i.photos.length > 0
      );

      filtered.forEach((i) => (usedPhotos = [...usedPhotos, ...i.photos]));
    }
    return usedPhotos;
  };

  const getImages = () => {
    (async () => {
      const URL = `https://picsum.photos/v2/list?page=${page}&limit=10`;
      let response: ImageData[];
      let url = URL;
      const usedPhotos = checkLocalStorageData();
      try {
        response = await (await fetch(url)).json();
        setInitialImages(response);

        if (usedPhotos.length > 0) {
          usedPhotos.forEach((photo) => {
            response = response.filter((item: ImageData) => item.id !== photo);
          });
        }
        setImages(response);
      } catch (err) {
        console.log(err);
      }
      return;
    })();
  };

  useEffect(() => {
    getImages();
  }, []);

  const unTagImage = (imgId: string) => {
    setImages((prev) => {
      const newImage = initialImages.find((item) => item.id === imgId);
      if (newImage) {
        return prev.concat(newImage);
      }
      return prev;
    });
  };

  const updateImagesByTags = (tags: TagData[]) => {
    let ids: string[] = [];
    tags.forEach((tag) => ids.push(...tag.photos));
    setImages((prev) => {
      let res: ImageData[] = [];
      if (ids.length === 0) {
        return prev;
      }
      ids.forEach((id) => {
        let imgs = initialImages.filter((item) => item.id === id);
        res = res.concat(imgs);
      });
      return res;
    });
  };

  const removeImageHandler = (imgId: string) => {
    setImages((prev) => {
      return prev.filter((img) => img.id !== imgId);
    });
  };

  const contextValue: ImagesDataContextObj = {
    images: images,
    removeImage: removeImageHandler,
    initialImages: initialImages,
    unTagImage: unTagImage,
    selectedImage: selectedImage,
    setSelectedImage: setSelectedImage,
    updateImagesByTags: updateImagesByTags,
  };
  return (
    <ImagesContext.Provider value={contextValue}>
      {props.children}
    </ImagesContext.Provider>
  );
};
