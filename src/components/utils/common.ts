import { TagData } from "../../interfaces";

export const notUsedInOthers = (tags:TagData[], photoId:string, tagId:string)=>{
    let usedPhotos:string[] = [];
    tags.forEach((i) =>  i.value !== tagId && (usedPhotos = [...usedPhotos, ...i.photos]));
    usedPhotos = usedPhotos.filter((item:string)=>item === photoId);
    return  usedPhotos.length === 0
    
}