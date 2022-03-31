import styled from "styled-components";
export const  StyledList = styled.li<{color:string}>`
    background: ${(props)=> (props.color ? `#${props.color}` : "")};
    overflow:hidden;
    margin: 1rem 0;
    width: 15rem;
    text-overflow: ellipsis;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    svg{
        float:right;
        margin-left: 0.5rem;
    }
`;
export const RenameDiv =styled.div`
    padding:1rem;
    input{
        margin: 0.5rem 0;
    }
`;