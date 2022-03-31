import { useContext } from "react";
import { TagsContext,TagDataContextObj } from "../context/tags-context";

export const useTags =(): TagDataContextObj => useContext(TagsContext)