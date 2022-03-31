import { combineComponets } from "../components/utils/combine-components";
import { ImagesContextProvider } from "./images-context";
import { TagsContextProvider } from "./tags-context";

const providers = [
    ImagesContextProvider,
    TagsContextProvider
];
export const AppContextProvider = combineComponets(...providers);