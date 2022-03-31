import styled from "styled-components";
 
export const MainDiv = styled.div`
    display:flex;
    justify-content:flex-start ;
    .panel{
        width:20%;
        overflow: hidden;
        max-height: 40rem;
        overflow-y: scroll;
        margin: 1rem 0;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        padding: 1rem;
        background-color: #a4d9e2;
    }
    h1{
   
        overflow: hidden;
        text-overflow: ellipsis;
      }
`;
export const InnerDiv = styled.div`
   
`;