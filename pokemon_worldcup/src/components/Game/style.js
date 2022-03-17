import styled from "styled-components";

export const FlexBox = styled.div`
    display:flex;
    flex-wrap: wrap;
    height:100vh;


    .flex-1{
        flex:1;
        min-width:500px;
        height:100vh;
        overflow:hidden;
    }

    .food_img{
        width:100%;
        height:100vh;
        transition: 0.5s;
        cursor:pointer;

    }

    .food_img:hover{
        transform: scale(1.1);
    }
`;