import styled from "styled-components";
 
export const StyledForm = styled.form`
   
   label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
    input {
    display: block;
    width: 100%;
    font: inherit;
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 4px;
   border: none;
    border-bottom: 2px solid #494844;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-bottom: 0.5rem;
  }
  
   button {
    font: inherit;
    background-color: #76adec;
    border: 1px solid #76adec;
    color: #201d0f;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
  }
  
    button:hover,
    button:active {
    background-color: #1d62b1;
    border-color: #1d62b1;
  }
`;
export const InnerDiv = styled.div`
   
`;