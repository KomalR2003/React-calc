import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    width: 400px;
    margin: 40px auto;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: minmax(120px, auto) repeat(5, 100px);
    box-shadow: 2px 2px 10px #333;
    border-radius: 10px;
`;

export const Screen = styled.div`
    grid-column: 1 / -1;
    background-color: #171717;
    width: 400px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    word-wrap: break-word;
    word-break: break-all;
    text-align: right;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const Previous = styled.div`
    color: rgba(255,255,255,0.75);
    font-size: 1.5rem;

`;

export const Current = styled.div`
    color: white;
    font-size: 2.5rem;
`;

export const Button = styled.button`
    cursor: pointer;
    font-size: 2rem;
    outline: none;
    color: white;
    border: 1px outset white;
    background-color: black;
    &:hover{
        background-color: #3d3d3d;
    }

    ${function({gridSpan}){
        if(gridSpan){
            return `grid-column: span ${gridSpan} ;`;
        }
    }}

    ${({operation}) => operation && 'background-color: #212121;'}

    ${({control}) => control && 'background-color: #212121;'}

    ${({equals}) => 
        equals && 'background-color: #212121; border-bottom-right-radius: 10px;'}

        ${({decimal}) => 
        decimal && 'background-color: #212121; border-bottom-left-radius: 10px;'}
`;
