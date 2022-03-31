import TagItem from "./TagItem";
import React from "react";
import { useTags } from "../hooks/use-tags";
import { useImages } from "../hooks/use-images";
import { notUsedInOthers } from "./utils/common";
import { StyledUl } from "./TagsStyle";
import { TagData } from "../interfaces";

export const Tags: React.FC = () => {
  const { tags, removeTag } = useTags();
  const { unTagImage } = useImages();

  const removeTagById = (tagId: string) => {
    debugger;
    removeTag(tagId);
    const currentTag = tags.find((item) => item.value === tagId);

    //untag if one image
    currentTag?.photos.forEach((photo) => {
      if (notUsedInOthers(tags, photo, currentTag.value)) {
        unTagImage(photo);
      }
    });
  };

  return (
    <StyledUl>
      {tags.length > 0 && <h1>Available Tags</h1>}
      {tags.map((item) => (
        <div key={item.value}>
          <TagItem
            color={item.color}
            label={item.label}
            value={item.value}
            onRemoveTag={removeTagById.bind(null, item.value)}
          />
        </div>
      ))}
    </StyledUl>
  );
};
