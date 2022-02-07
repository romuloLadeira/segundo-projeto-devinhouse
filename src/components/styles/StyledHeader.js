import styled from "styled-components";

export const StyledHeader =  styled.header`
background-color:${({theme})=>theme.color.backgroundHeader};
height: 200px;

    nav{
        display: flex;
        justify-content:space-between;
        width: 90%;
        margin: 0 20px 20px 20px;
    }
    a{
        text-decoration:none;
        margin: 10px;
        font-size:2rem;
    }
    h1{
        font-size:3rem;

    }
    div{
        margin:80px 20px 20px 20px;
        display: flex;
        justify-content:space-between;
    }
`