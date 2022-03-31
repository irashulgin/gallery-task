import styled from "styled-components";
export const  StyledDiv = styled.div<{color:string}>`
    background: ${(props)=> (props.color ? `#${props.color}` : "")};
    display: flex;
`;
export const ContainerDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    width:80%;
    .photo{
        background-color: #fff; 
        height: 20rem;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 2rem; 
        margin: 5px;
    }
    .name{
        width: 10rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .picture{
        object-fit: cover;
    }
`;
export const InnerDiv = styled.div`
    width: 20rem;
    margin: 2rem;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`;