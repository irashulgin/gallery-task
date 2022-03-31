import styled from "styled-components";
export const  StyledDiv = styled.div<{color:string}>`
    background: ${(props)=> (props.color ? `#${props.color}` : "")};
    display: flex;
    height: 2rem;
    padding: 0.5rem;
    overflow:hidden;
    text-overflow: ellipsis;
`;
export const ContainerDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: flex-start;
    height: 10rem;
`;
export const InnerDiv = styled.div`
    width: 20rem;
    margin: 2rem;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`;