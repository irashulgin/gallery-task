import styled from "styled-components";
export const  StyledItem = styled.div`
    display:flex;
    align-items: center;
    margin: 1rem 0;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    background-color: #a4d9e2;
    .text{
        overflow: hidden;
        text-overflow: ellipsis;
        width:10rem;
        margin-left: 0.5rem;
      }
      svg{
          flex:auto;
      }
`;