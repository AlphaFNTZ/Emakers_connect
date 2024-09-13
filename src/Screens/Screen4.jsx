import * as React from "react";
import { styled } from "styled-components";
import { autoRun } from "../Animations/Animation_autoRun";
import BackGround_4 from "../../public/assets/Screen_4.png";
import Cavern from "../../public/assets/Pedaco_caverna.png";

const Screen4 = styled.section`
	display: flex;
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
	top: -35.5%;
	position: relative;
	justify-content: flex-start; /* Esconde o conteúdo que sai da tela */
	width: 100%; /* Largura total do container */
	.pieceCavern {
		flex-shrink: 0; /* Garante que cada imagem mantenha seu tamanho */
		width: 206px; /* Defina a largura da imagem, ajuste conforme necessário */
		animation: ${autoRun} 5s linear infinite;
		margin-right: -1.5px;
	}
`;

function Screen_4() {
	return (
		<Screen4 id="screen4">
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
			</Container3>
		</Screen4>
	);
}

export default Screen_4;
