import { FC } from "react"
import { Pizza } from "../models/Pizza"
import { SinglePizza } from "./SinglePizza"

interface DisplayPizzasProps {
    pizzasList: Pizza[],
    updatePizza: (newPizza: Pizza) => void,
    deletePizza: (id: number) => void
}



export const DisplayPizzas:FC<DisplayPizzasProps> = ({ pizzasList, updatePizza, deletePizza }) => {
    return (
        <div className="container">
            {pizzasList.map((pizza: Pizza) => {
                return (
                    <SinglePizza key={pizza.id} pizza={pizza} updatePizza={updatePizza} deletePizza={deletePizza} />
                )
            })}
        </div>
    )
}


