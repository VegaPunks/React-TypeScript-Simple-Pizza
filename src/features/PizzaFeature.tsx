import React, { FC, useState, useEffect } from "react";
import { Pizza } from "../models/Pizza";
import { useParams } from "react-router-dom"

const PizzaFeature: FC = () => {
	const [pizza, setPizza] = useState<Pizza | null>(null);
    const { id } = useParams()


    useEffect(() => {
        const pizzasState = localStorage.getItem("pizzasState")
        if(pizzasState && id) {
            const pizzasList = JSON.parse(pizzasState)
            const searchId = parseInt(id)

            const currentPizza = pizzasList.find((p: Pizza) => p.id === searchId)
            setPizza(currentPizza)
        }
    }, [])

	return (
		<>
			<span className="heading">Ваша пицца</span>
			<div className="pizza pizza-page">
				<img src={`/images/${pizza?.img}`} alt={pizza?.title} />
			</div>
			<h2>{pizza?.title}</h2>
			<span>{pizza?.price}</span>
			<p>Лучшая в городе</p>
		</>
	);
};

export default PizzaFeature;
