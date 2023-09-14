import React from "react";
import "./App.css";
import AddPizzaForm from "./components/AddPizzaForm";
import { Pizza } from "./models/Pizza";
import { DisplayPizzas } from "./components/DisplayPizzas";

const App: React.FC = () => {
	const [pizzasList, setPizzasList] = React.useState<Pizza[]>([]);

	const addPizza = (newPizza: Pizza) => {
		setPizzasList([...pizzasList, newPizza]);
	};

	return (
		<div className="App">
			<div className="wrap">
				<span className="heading">Наша пиццерия</span>
				<AddPizzaForm addPizza={addPizza} />
				<DisplayPizzas pizzasList={pizzasList} />
			</div>
		</div>
	);
};

export default App;
