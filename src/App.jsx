import { useState } from "react";
import "./App.css";
import Rock from "./assets/rock.png";
import Pager from "./assets/paper.png";
import Scissors from "./assets/scissors.png";

function App() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [bot, setBot] = useState("Rock");
	const [player, setPlayer] = useState("Rock");
	const [countdown, setCountdown] = useState(null);

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

	const checkResult = (player, bot) => {
		if(player==='Rock') {
			if(bot==='Scissors') return 'win';
			if(bot==='Paper') return 'lose';
		}

		if(player==='Scissors') {
			if(bot==='Paper') return 'win';
			if(bot==='Rock') return 'lose';
		}

		if(player==='Paper') {
			if(bot==='Rock') return 'win';
			if(bot==='Scissors') return 'lose';
		}

		return 'draw';
	}
		
	const gameStart = (choice = "") => {
		if(!choice) return;
		let count = 3;
		const random = options[Math.floor(Math.random() * options.length)];
		setPlayer(choice);
		setBot(random);
		setCountdown(count);

		const timer = setInterval(() => {
			count -= 1;

			if (count === 0) {
				setCountdown(0);
				clearInterval(timer);

				// Small delay so "0" is visible before game starts
				setTimeout(() => {
					setCountdown(null);
					setIsPlaying(true);
				}, 600);

			} else {
				setCountdown(count);
			}
		}, 1000);

		
	}

	const resetGame = () => {
		setIsPlaying(false);
		setCountdown(null)
	}

	return <>
		{countdown !== null 
			? <div className="modal">
					<div className="modalOverlay"></div>
					<span className="numberCountdown">{countdown}</span>
				</div>
			: null
		}
		{isPlaying? <div className="modal">
					<div className="modalOverlay"></div>
					<div>
						<span className="resultText">You are {checkResult(player, bot)}</span>
						<button className="resetBtn" onClick={() => resetGame()}>Retry</button>
					</div>
				</div>:null}
		<div className="playWrapper">
			<div className={`playArea ${isPlaying ? "is-active" : ""}`}>
				<div className="bot choiceCard"><img src={getImage(bot)} alt="" /></div>
				<div className="player choiceCard"><img src={getImage(player)} alt="" /></div>
			</div>

			<ul className="controller">
				<li><button onClick={() => gameStart("Rock")} className={isPlaying&&'disabled'}><img src={Rock} alt="rock" /></button></li>
				<li><button onClick={() => gameStart("Paper")} className={isPlaying&&'disabled'}><img src={Pager} alt="paper" /></button></li>
				<li><button onClick={() => gameStart("Scissors")} className={isPlaying&&'disabled'}><img src={Scissors} alt="scissors" /></button></li>
			</ul>
		</div>
	</>;
}

export default App;
