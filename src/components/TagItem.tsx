import { RenameDiv, StyledList } from "./TagItemStyle";
import { ImBin } from "react-icons/im";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { useState } from "react";
import { useTags } from "../hooks/use-tags";
import { StyledButton } from "./TagsModalStyle";

const TagItem: React.FC<{
  label: string;
  onRemoveTag?: () => void;
  // onClick:()=>void;
  color: string;
  value: string;
}> = (props) => {
  const { renameTag } = useTags();
  const showRenameTag = (id: string) => {
    setRename((prev) => {
      return prev.concat(id);
    });
  };
  const renameTagById = (id: string, name: string) => {
    renameTag(id, name);
    setRename([]);
  };
  const [rename, setRename] = useState<string[]>([]);
  const [newNameTag, setNewNameTag] = useState<string>("");
  const changeTagName = (event: any) => {
    setNewNameTag(event.target.value);
  };
  return (
    <StyledList color={props.color}>
      {props.label}
      <ImBin onClick={props.onRemoveTag} />
      <MdDriveFileRenameOutline onClick={() => showRenameTag(props.value)} />
      {rename.includes(props.value) && (
        <RenameDiv>
          <input type="text" value={newNameTag} onChange={changeTagName} />
          <StyledButton
            onClick={renameTagById.bind(null, props.value, newNameTag)}
          >
            Rename
          </StyledButton>
        </RenameDiv>
      )}
    </StyledList>
  );
};

export default TagItem;
