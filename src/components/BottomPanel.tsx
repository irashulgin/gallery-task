import React from "react";
import PhotoItem from "./PhotoItem";
import { TagData } from "../interfaces";
import { useTags } from "../hooks/use-tags";
import { useImages } from "../hooks/use-images";
import { notUsedInOthers } from "./utils/common";
import { StyledDiv, ContainerDiv, InnerDiv } from "./BottomPanelStyle";

export const BottomPanel: React.FC = () => {
  const { unTagImage } = useImages();
  const { removePhoto } = useTags();
  const { tags } = useTags();

  const removeImg = (data: { tagId: string; img: string }) => {
    if (notUsedInOthers(tags, data.img, data.tagId)) {
      unTagImage(data.img);
    }
    //remove from tags array photos
    removePhoto(data.tagId, data.img);
  };

  return (
    <ContainerDiv>
      {tags &&
        tags.map((tag: TagData) => (
          <InnerDiv key={tag.value}>
            <StyledDiv color={tag.color}>{tag.label}</StyledDiv>
            {tag.photos.map((img: string) => (
              <PhotoItem
                key={img}
                id={img}
                onRemoveImg={removeImg.bind(null, {
                  tagId: tag.value,
                  img: img,
                })}
              />
            ))}
          </InnerDiv>
        ))}
    </ContainerDiv>
  );
};
