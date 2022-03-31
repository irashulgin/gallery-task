import { FC } from "react";
import { ImagesList } from "./ImagesList";
import { NewTag } from "./NewTag";
import { Tags } from "./Tags";
import { BottomPanel } from "./BottomPanel";
import { TagsModal } from "./TagsModal";
import { useImages } from "../hooks/use-images";
import { MainDiv } from "./MainPageStyle";

export const MainPage: FC = () => {
  const { selectedImage, images } = useImages();
  return (
    <>
      <MainDiv>
        <div className="panel">
          <NewTag />
          {selectedImage === "" && (
            <>
              {/*Bonus  <h1>Filter by tags:</h1>
              <TagsModal imgId={selectedImage} filter={true}/> */}
              <Tags />
            </>
          )}
          {selectedImage !== "" && (
            <>
              <h1>{images.find((img) => img.id === selectedImage)?.url}</h1>
              <h3>Assigned Tags</h3>
              <TagsModal imgId={selectedImage} filter={false} />
            </>
          )}
        </div>

        <ImagesList />
      </MainDiv>
      <div>
        <BottomPanel />
      </div>
    </>
  );
};
