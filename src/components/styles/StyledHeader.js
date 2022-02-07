import styled from "styled-components";

export const StyledHeader =  styled.header`
background-color:${({theme})=>theme.color.backgroundHeader};
height: 200px;

    nav{
        display: flex;
        justify-content:space-between;
        width: 90%;
        margin: 5%;
    }
    a{
        text-decoration:none;
        margin: 10px;
        font-size:2rem;
    }
    h1{
        font-size:3rem;

    }
`