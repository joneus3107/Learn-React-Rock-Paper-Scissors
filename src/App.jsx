import { useState } from "react";
import "./App.css";
import Rock from "./assets/rock.png";
import Pager from "./assets/paper.png";
import Scissors from "./assets/scissors.png";

function App() {
	const [bot, setBot] = useState('');
	const [player, setPlayer] = useState('');

	const options = ['Rock', 'Pager', "Scissors"];

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

	return <>
		<div className="playWrapper">
			<div className="playArea">
				<img src={() => getImage(bot)} alt="" className="bot" />
				<img src={() => getImage(player)} alt="" className="player" />
			</div>

			<ul className="controller">
				<li><button onClick={() => setPlayer("Rock")}><img src={Rock} alt="rock" /></button></li>
				<li><button onClick={() => setPlayer("Paper")}><img src={Pager} alt="paper" /></button></li>
				<li><button onClick={() => setPlayer("Scissors")}><img src={Scissors} alt="scissors" /></button></li>
			</ul>
		</div>
	</>;
}

export default App;
