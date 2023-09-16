import React, { useEffect } from "react";
import AddPizzaForm from "../components/AddPizzaForm";
import { Pizza } from "../models/Pizza";
import { DisplayPizzas } from "../components/DisplayPizzas";

const HomeFeature: React.FC = () => {
	const [pizzasList, setPizzasList] = React.useState<Pizza[]>([]);

	const addPizza = (newPizza: Pizza) => {
		const newPizzasList = [...pizzasList, newPizza]
		setPizzasList(newPizzasList);
		localStorage.setItem("pizzasState", JSON.stringify(newPizzasList))
	};

	const updatePizza = (newPizza: Pizza) => {
		const newPizzasList = pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza))
		setPizzasList(newPizzasList);
		localStorage.setItem("pizzasState", JSON.stringify(newPizzasList))
	};

	const deletePizza = (id: number) => {
		const newPizzasList = pizzasList.filter((pizza) => pizza.id !== id)
		setPizzasList(newPizzasList)
		localStorage.setItem("pizzasState", JSON.stringify(newPizzasList))
	};

	useEffect(() => {
		const pizzasState = localStorage.getItem("pizzasState")
		if(pizzasState) {
			let res = JSON.parse(pizzasState)
			setPizzasList(res)
		}
	}, [])

	return (
		<div className="App">
			<div className="wrap">
				<span className="heading">Наша пиццерия</span>
				<AddPizzaForm addPizza={addPizza} />
				<DisplayPizzas
					pizzasList={pizzasList}
					updatePizza={updatePizza}
					deletePizza={deletePizza}
				/>
			</div>
		</div>
	);
};

export default HomeFeature;
