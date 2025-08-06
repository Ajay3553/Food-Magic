import whitesuacepasta from './images/whitesuacepasta.jpg'
import ghevar from './images/ghevar.jpg'
import redsaucepasta from './images/redsaucepasta.jpg'
import burger from './images/burger.jpg'
import nonvegburger from './images/nonvegburger.jpg'

const foodItems = [
    {
        id: 1,
        food_name: "White Sauce Pasta",
        food_category: "Pasta",
        food_type:"veg",
        food_quantity: 1,
        food_image: whitesuacepasta,
        price:80
    },

    {
        id: 2,
        food_name: "Ghevar",
        food_category: "Sweet Dish",
        food_type:"veg",
        food_quantity: 1,
        food_image: ghevar,
        price:100
    },

    {
        id: 3,
        food_name: "Red Sauce Pasta",
        food_category: "Pasta",
        food_type:"veg",
        food_quantity: 1,
        food_image: redsaucepasta,
        price:80
    },

    {
        id: 4,
        food_name: "Burger",
        food_category: "Burger",
        food_type:"veg",
        food_quantity: 1,
        food_image: burger,
        price:50
    },

    {
        id: 5,
        food_name: "Non veg Burger",
        food_category: "Burger",
        food_type: "Non Veg",
        food_quantity: 1,
        food_image: nonvegburger,
        price: 80
    }
]

export default foodItems