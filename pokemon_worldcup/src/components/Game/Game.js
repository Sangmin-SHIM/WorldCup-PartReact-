import React, {useState, useEffect} from 'react';
import {FlexBox} from './style'

const items = [
    {
        name : "bacon",
        src: require("../../img/bacon.jpg")
    },
    {
        name : "macaron",
        src: require("../../img/macaron.jpg")
    },
    {
        name : "pancake",
        src: require("../../img/pancake.jpg")
    },
    {
        name : "pizza",
        src: require("../../img/pizza.jpg")
    },

]


const Game = ()=>{
        const [foods,setFoods] = useState([]);
        const [displays,setDisplays] = useState([]);
        const [winners, setWinners] = useState([]);

        const clickHandler = (food) =>()=>{
             if(foods.length <= 2){
                if(winners.length === 0){
                    setDisplays([food]);
                    alert("Winner is "+ food.name + ' !');
                } else {
                    let updatatedFood = [...winners,  food]
                    setFoods(updatatedFood);
                    setDisplays([updatatedFood[0], updatatedFood[1]]);
                    setWinners([]);
                }
             } else if(foods.length > 2){
                setWinners([...winners, food]);
                setDisplays([foods[2],foods[3]]);
                setFoods(foods.slice(2));
             }
        };

        useEffect(() => {
            items.sort(()=> Math.random()-0.5);
            setFoods(items);
            setDisplays([items[0], items[1]]);
        }, [])
    return (
    <FlexBox>
        <h1 className='title'>Pokémon</h1>
        {displays.map((food)=>{
            return (
                <div className='flex-1' key={food.name} onClick={clickHandler(food)}>
                    <img className='food_img' src={food.src}/>
                    <div className='name'>{food.name}</div>
                </div>
            );
        })}

    </FlexBox>
    )
}

export default Game;
