import * as React from "react";
import { styled } from "styled-components";
import { autoRun } from "../Animations/Animation_autoRun";
import BackGround_2 from "../../public/assets/Screen_2.png";
import Fence from "../../public/assets/Pedaco_cerca.png";

const Screen2 = styled.section`
	display: flex;
	z-index: -2;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	scroll-snap-align: start;
	background-image: url(${BackGround_2});
	background-size: cover;
`;

const Container1 = styled.div`
	display: flex;
	bottom: -37%;
	position: relative;
	justify-content: flex-start; /* Esconde o conteúdo que sai da tela */
	width: 100%; /* Largura total do container */
	.pieceFence {
		flex-shrink: 0; /* Garante que cada imagem mantenha seu tamanho */
		width: 206px; /* Defina a largura da imagem, ajuste conforme necessário */
		animation: ${autoRun} 5s linear infinite;
		margin-right: -1.5px;
	}
`;

function Screen_2() {
	return (
		<Screen2 id="screen2">
			<Container1>
				<img src={Fence} className="pieceFence" />
				<img src={Fence} className="pieceFence" />
				<img src={Fence} className="pieceFence" />
				<img src={Fence} className="pieceFence" />
				<img src={Fence} className="pieceFence" />
				<img src={Fence} className="pieceFence" />
				<img src={Fence} className="pieceFence" />
				<img src={Fence} className="pieceFence" />
				<img src={Fence} className="pieceFence" />
				<img src={Fence} className="pieceFence" />
				<img src={Fence} className="pieceFence" />
			</Container1>
		</Screen2>
	);
}

export default Screen_2;
