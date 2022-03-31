import { ImBin } from "react-icons/im";
import { useEffect, useState } from "react";
import { ImageData } from "../interfaces";
import { useImages } from "../hooks/use-images";
import { StyledItem } from "./PhotoItemStyle";

const PhotoItem: React.FC<{ id: string; onRemoveImg: () => void }> = (
  props
) => {
  const { initialImages } = useImages();
  const [currentImage, setCurrentImage] = useState<ImageData | null>(null);

  useEffect(() => {
    const img = initialImages.find((img) => img.id === props.id);
    if (img) {
      setCurrentImage(img);
    }
  }, [props.id, initialImages]);

  return (
    <StyledItem>
      <img src={currentImage?.download_url} height="50px" alt="" />
      <span className="text">{currentImage?.url} </span>
      <ImBin onClick={props.onRemoveImg} />
    </StyledItem>
  );
};

export default PhotoItem;
