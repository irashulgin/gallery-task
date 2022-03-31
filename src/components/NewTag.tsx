import React, { useState } from "react";

import { useTags } from "../hooks/use-tags";
import { StyledForm } from "./NewTagStyle";

export const NewTag: React.FC = () => {
  const { addTag } = useTags();
  const [newTag, setNewTag] = useState<string>("");

  const onChangeHandler = (event: any) => {
    setNewTag(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (newTag !== "") {
      addTag(newTag);
    } else {
        alert("Please enter tag name");
    }
    setNewTag("");
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <input
        type="text"
        id="label"
        value={newTag}
        onChange={onChangeHandler}
        placeholder="New Tag"
      ></input>
      <button>Save</button>
    </StyledForm>
  );
};
