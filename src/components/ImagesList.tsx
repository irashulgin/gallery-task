import React, { useState } from "react";
import { BsFillTagFill } from "react-icons/bs";
import { TagsModal } from "./TagsModal"; 
import { useImages } from "../hooks/use-images";
import { useTags } from "../hooks/use-tags";
import { ContainerDiv } from "./ImageListStyle";

export const ImagesList: React.FC = () => {
  const [showTags, setShowTags] = useState<string[]>([]);
  const { images, setSelectedImage } = useImages();
  const { tags } = useTags();

  const onClickHandler = (image: string) => {
    setSelectedImage(image);
  };

  const toggleTags = (id: string) => {
    setShowTags((prevTags) => {
      return prevTags.concat(id);
    });
  };

 
  return (
    <>
      <ContainerDiv>
        {images.map((img) => (
          <div className="photo" key={img.id}>
            <div className="picture">
              <img alt=""
                height="200px"
                src={img.download_url}
                onClick={onClickHandler.bind(null, img.id)}
              />
            </div>
            <div className="name">{img.url}</div>
            {tags && tags.length > 0 && (
              <BsFillTagFill onClick={() => toggleTags(img.id)} />
            )}
            {showTags.includes(img.id) && <TagsModal imgId={img.id} filter={false} />}
          </div>
        ))}
      </ContainerDiv>
    </>
  );
};
