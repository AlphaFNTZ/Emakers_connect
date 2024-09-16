import * as React from "react";
import { styled } from "styled-components";
import { autoRun } from "../Animations/Animation_autoRun";
import BackGround_4 from "../../public/assets/Screen_4.png";
import Cavern from "../../public/assets/Pedaco_caverna.png";
import Cavern_back from "../../public/assets/Cavena_fundo.png";

const Screen4 = styled.section`
	display: flex;
	position: relative;
	z-index: -2;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	scroll-snap-align: start;
	background-image: url(${BackGround_4});
	background-size: cover;
`;

const Container3 = styled.div`
	display: flex;
	z-index: 5;
	top: 0px;
	position: absolute;
	justify-content: flex-start; /* Esconde o conteúdo que sai da tela */
	width: 100%; /* Largura total do container */
	.pieceCavern {
		flex-shrink: 0; /* Garante que cada imagem mantenha seu tamanho */
		width: 206px; /* Defina a largura da imagem, ajuste conforme necessário */
		animation: ${autoRun} 5s linear infinite;
		margin-right: -1.5px;
	}
	@media (max-width: 767px) {
		top: 0px;
		.pieceCavern {
			width: 110px; /* Defina a largura da imagem, ajuste conforme necessário */
		}
	}
`;

const Back_cavern = styled.div`
	display: flex;
	position: absolute;
	z-index: 2;
	top: 200px;
	justify-content: flex-start; /* Esconde o conteúdo que sai da tela */
	width: 100%; /* Largura total do container */
	.pieceCavernBack {
		flex-shrink: 0; /* Garante que cada imagem mantenha seu tamanho */
		width: 206px; /* Defina a largura da imagem, ajuste conforme necessário */
		animation: ${autoRun} 20s linear infinite;
		margin-right: -1.5px;
	}
	@media (max-width: 767px) {
		top: 120px;
		.pieceCavernBack {
			width: 110px;
		}
	}
`;

const Ballon_title = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	z-index: 6;
	color: #181717;
	background-color: white;
	width: 500px;
	height: 80px;
	margin-bottom: 50px;
	@media (max-width: 767px) {
		margin-top: 120px;
		width: 65%;
		min-width: 275px;
		height: 45px;
		margin-bottom: 30px;
	}
`;

const Balloon_text = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	z-index: 6;
	color: #181717;
	background-color: white;
	width: 90%;
	max-width: 1200px;
	height: 500px;
	@media (max-width: 767px) {
		width: 92%;
		min-width: 300px;
		height: 400px;
	}
`;

function Screen_4() {
	return (
		<Screen4 id="screen4">
			<Ballon_title>Teste de balao titulo</Ballon_title>
			<Balloon_text>Teste de balao texto</Balloon_text>
			<Back_cavern>
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
			</Back_cavern>
			<Container3>
				<img src={Cavern} className="pieceCavern" />
				<img src={Cavern} className="pieceCavern" />
				<img src={Cavern} className="pieceCavern" />
				<img src={Cavern} className="pieceCavern" />
				<img src={Cavern} className="pieceCavern" />
				<img src={Cavern} className="pieceCavern" />
				<img src={Cavern} className="pieceCavern" />
				<img src={Cavern} className="pieceCavern" />
				<img src={Cavern} className="pieceCavern" />
				<img src={Cavern} className="pieceCavern" />
				<img src={Cavern} className="pieceCavern" />
				<img src={Cavern} className="pieceCavern" />
				<img src={Cavern} className="pieceCavern" />
				<img src={Cavern} className="pieceCavern" />
				<img src={Cavern} className="pieceCavern" />
				<img src={Cavern} className="pieceCavern" />
				<img src={Cavern} className="pieceCavern" />
			</Container3>
		</Screen4>
	);
}

export default Screen_4;
