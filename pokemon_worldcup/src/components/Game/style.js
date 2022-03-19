import styled from "styled-components";

export const FlexBox = styled.div`
    display:flex;
    flex-wrap: wrap;
    height:50vh;

    margin:auto;


    .title{
        position:absolute;
        z-index:999;
        margin-left:10px;
        top:10px;
        transform: translateX(-50%);
        left:50%;
        text-transform : uppercase;
    }
    .flex-1{
        transform: translateY(50%);
        flex:1;
        min-width:500px;
        height:50vh;
        overflow:hidden;
        background-color: black;

    }

    .food_img{
        width:100%;
        height:50vh;
        transition: 0.5s;
        cursor:pointer;

    }

    .food_img:hover{
        transform: scale(1.1);
        opacity: 0.8;
    }

    
    .name {
        position:absolute;
        z-index:50;
        color:#fff;
        bottom:10%;
        left:50%;
        transform: translateX(-50%);
        font-size:130px;
    }
`;