export interface TagData {
  label: string;
  color: string;
  value: string;
  photos: string[];
}

export interface Tags {
  tags: TagData[];
}

export interface ImageData {
  id: string;
  author: string;
  width: string;
  height: string;
  url: string;
  download_url: string;
}
