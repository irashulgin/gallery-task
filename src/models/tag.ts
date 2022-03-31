class Tag {
    id: string;
    label: string;
    color:string;
  
    constructor(text: string) {
      this.label = text;
      this.color = Math.floor(Math.random()*16777215).toString(16);
      this.id = new Date().toISOString();
    }
  }
  
  export default Tag;