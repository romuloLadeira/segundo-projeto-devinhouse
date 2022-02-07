import styled from "styled-components";

export const GCardConteiner = styled.div`

    border: 3px solid ${({theme}) => theme.color.border};
    width: 30%;
    height:400px;
    margin-top:10px;
    background-color:   ${({theme})=>theme.color.backgroundHeader};
    
    img {
        width: 100%;
        margin: auto;
        border-radius: 5px;
    }
    p{
        width: :90%;
        height: 20%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    button{
        margin: :auto;
        background:${({theme}) => theme.color.background} ;
        border: 1px solid ${({theme}) => theme.color.border};
        color:${({theme})=>theme.color.font};
    }
`