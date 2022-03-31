import { useContext } from "react";
import { ImagesContext,ImagesDataContextObj } from "../context/images-context";

export const useImages =(): ImagesDataContextObj => useContext(ImagesContext)