import { MdOutlineDensitySmall } from "react-icons/md";
import { MdFreeBreakfast } from "react-icons/md";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { FaBurger } from "react-icons/fa6";
import { GiWrappedSweet } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";

const categories = [
    {
        id: 1,
        name: "All",
        image:<MdOutlineDensitySmall className="w-[60px] h-[60px] text-sky-500"/>,
    },

    {
        id: 2,
        name: "Break Fast",
        image:<MdFreeBreakfast className="w-[60px] h-[60px] text-sky-500"/>,
    },

    {
        id: 3,
        name: "Main Dish",
        image:<MdEmojiFoodBeverage className="w-[60px] h-[60px] text-sky-500"/>,
    },

    {
        id: 4,
        name: "Burger",
        image:<FaBurger className="w-[60px] h-[60px] text-sky-500"/>,
    },

    {
        id: 5,
        name:"Pasta",
        image:<FaBowlFood className="w-[60px] h-[60px] text-sky-500"/>
    },

    {
        id: 6,
        name: "Sweet Dish",
        image: <GiWrappedSweet className="w-[60px] h-[60px] text-sky-500"/>
    },
]

export default categories