import { useState } from "react";
import "./App.css";
import Rock from "./assets/rock.png";
import Pager from "./assets/paper.png";
import Scissors from "./assets/scissors.png";

function App() {
	const [bot, setBot] = useState("Rock");
	const [player, setPlayer] = useState("Rock");

	const options = ['Rock', 'Paper', "Scissors"];

	const getImage = (data = "") => {
		let image;
		if (!data) return;

		if (data==="Rock") {
			image = Rock;
		}else if(data === "Paper") {
			image = Pager;
		}else{
			image = Scissors;
		}

		return image;
	}

	const gameStart = (choice = "") => {
		if(!choice) return;
		const random = options[Math.floor(Math.random() * options.length)];
		setPlayer(choice);
		setBot(random);

		
	}

	return <>
		<div className="playWrapper">
			<div className="playArea">
				<div className="bot choiceCard"><img src={getImage(bot)} alt="" /></div>
				<div className="player choiceCard"><img src={getImage(player)} alt="" /></div>
			</div>

			<ul className="controller">
				<li><button onClick={() => gameStart("Rock")}><img src={Rock} alt="rock" /></button></li>
				<li><button onClick={() => gameStart("Paper")}><img src={Pager} alt="paper" /></button></li>
				<li><button onClick={() => gameStart("Scissors")}><img src={Scissors} alt="scissors" /></button></li>
			</ul>
		</div>
	</>;
}

export default App;
