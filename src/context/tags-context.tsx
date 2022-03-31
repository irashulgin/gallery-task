import React, { useEffect, useState } from "react";
import { TagData } from "../interfaces";

export interface TagDataContextObj {
  tags: TagData[];
  addTag: (id: string) => void;
  removeTag: (id: string) => void;
  renameTag: (id: string, name: string) => void;
  removePhoto: (tagId: string, imgId: string) => void;
  applyTag: (tagId: string, imgId: string) => void;
}

export const TagsContext = React.createContext<TagDataContextObj>({
  tags: [],
  addTag: () => {},
  removeTag: (id: string) => {},
  renameTag: (id: string, name: string) => {},
  removePhoto: (tagId: string, imgId: string) => {},
  applyTag: (tagId: string, imgId: string) => {},
});

export const TagsContextProvider: React.FC = (props) => {
  const [tags, setTags] = useState<TagData[]>([]);
  const localTags = localStorage.getItem("tags");

  useEffect(() => {
    if (localTags) {
      setTags(JSON.parse(localTags));
    }
  }, []);

  const applyTaghandler = (tagId: string, imgId: string) => {
    setTags((prevTags) => { 
      const i = prevTags.findIndex((t) => t.value === tagId);
      if (i !== -1 && !prevTags[i].photos.includes(imgId)) {
        prevTags[i].photos.push(imgId);
      }
      localStorage.setItem("tags", JSON.stringify([...prevTags]));
      return [...prevTags];
    });
  };

  const addTagHandler = (tagName: string) => {
    const newTag: TagData = {
      label: tagName,
      value: new Date().toISOString(),
      color: Math.floor(Math.random() * 16777215).toString(16),
      photos: [],
    };
    setTags((prevTags) => {
      if (!prevTags.find((t) => t.label === newTag.label)) {
        localStorage.setItem("tags", JSON.stringify(prevTags.concat(newTag)));
        return prevTags.concat(newTag);
      }
      alert("Tag allready exists");
      return prevTags;
    });
  };

  const removePhotoHandler = (tagId: string, imgId: string) => {
    setTags((prevTags) => {
      const i = prevTags.findIndex((t) => t.value === tagId);
      if (i !== -1) {
        prevTags[i].photos = prevTags[i].photos.filter(
          (photo) => photo !== imgId
        );
      }
      localStorage.setItem("tags", JSON.stringify(prevTags));
      return [...prevTags];
    });
  };

  const removeTagHandler = (tagId: string) => { 
    setTags((prevTags) => {
      const res = prevTags.filter((tag) => tag.value !== tagId);
      localStorage.setItem("tags", JSON.stringify(res));
      return res;
    });
  };

  const renameTagHandler = (id: string, name: string) => {
    setTags((prevTags) => {
      const currentTag = prevTags.find((tag) => tag.value === id);
      if (currentTag) {
        currentTag.label = name;
      }
      localStorage.setItem("tags", JSON.stringify(prevTags));
      return [...prevTags];
    });
  };
  
  const contextValue: TagDataContextObj = {
    tags: tags,
    addTag: addTagHandler,
    removeTag: removeTagHandler,
    applyTag: applyTaghandler,
    removePhoto: removePhotoHandler,
    renameTag: renameTagHandler,
  };
  return (
    <TagsContext.Provider value={contextValue}>
      {" "}
      {props.children}{" "}
    </TagsContext.Provider>
  );
};
