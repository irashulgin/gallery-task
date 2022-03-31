import Select from "react-select"; 
import React, { useState } from "react";
import { TagData } from "../interfaces";
import { useImages } from "../hooks/use-images";
import { useTags } from "../hooks/use-tags";
import { StyledButton } from "./TagsModalStyle";

export const TagsModal: React.FC<{ imgId: string,filter:boolean }> = (props) => {
  const { setSelectedImage, removeImage, updateImagesByTags } = useImages();
  const { tags, applyTag } = useTags();
  const [selected, setSelected] = useState<TagData[]>([]);

  const onChangeHandler = (selectedTag: any) => {
    setSelected(selectedTag);
  };

  const applyTags = () => {
    setSelectedImage("");
    removeImage(props.imgId);
    selected.forEach((tag) => {
      applyTag(tag.value, props.imgId);
    });
  };
  const filterImages =()=>{
    updateImagesByTags(selected);
  }

  return (
    <>
      <Select
        options={tags}
        closeMenuOnSelect={false}
        isMulti={true}
        onChange={onChangeHandler}
      />
       {!props.filter && <StyledButton onClick={applyTags}>Apply</StyledButton>}
       {props.filter && <StyledButton onClick={filterImages}>Filter</StyledButton>}
    </>
  );
};
