import React from 'react';
import {FlexBox} from './style'

const Game = ()=>{

    return <FlexBox>
        <div className='flex-1'>
            <img className='food_img' src={require("../../img/bacon.jpg")}/>
        </div>
        <div className='flex-1'>
            <img className='food_img' src={require("../../img/pizza.jpg")}/>
        </div>
    </FlexBox>
}

export default Game;
