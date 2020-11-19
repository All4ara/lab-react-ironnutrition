import React, {useState} from 'react';
import 'bulma/css/bulma.css';
import './foodlist.css';
import FoodBox from './foodbox/foodbox.js';
import foods from '../foods.json'

function FoodList(){

    const [foodsDisplayed, setFoodsDisplayed] = useState(foods);
    const [formShown, setFormShown] = useState(false);

    const FoodListItems = () => {
        return foodsDisplayed.map(food => {
            return <FoodBox image={food.image} calories={food.calories} quantity={food.quantity} name={food.name}/>
        })
    }
    const showFoodForm = () => {
        setFormShown(!formShown)
        
    }

    const AddFood = (event) => {
        let nameInput = event.target.parentNode.elements['name'].value;
        let caloriesInput = Number(event.target.parentNode.elements['calories'].value);
        let imgInput = event.target.parentNode.elemnts['img'].value;

        let newFood = [...foodsDisplayed];
        newFood.push({name: nameInput, calories: caloriesInput, image: imgInput});
        setFormShown(false);
        setFoodsDisplayed(newFood)
    }

    return (
        <div>
            <div>
                <button onClick={showFoodForm}>Add New Food</button>
                {formShown ? 
                    <form>
                        <input type="text" placeholder="name"></input>
                        <input type="text" placeholder="calories"></input>
                        <input type="text" placeholder="image url"></input>
                        <input type="submit" onClick={AddFood}></input>
                    </form>
                    :
                    null
                }
            
            </div>
            <FoodListItems/>
        </div>
    )
}

export default FoodList;