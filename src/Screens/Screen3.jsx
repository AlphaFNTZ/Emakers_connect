import * as React from "react";
import { styled } from "styled-components";
import { autoRun } from "../Animations/Animation_autoRun";
import Floor from "../../public/assets/Pedaco_chao.png";

const Screen3 = styled.section`
	display: flex;
	position: relative;
	z-index: -2;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	scroll-snap-align: start;
	background: linear-gradient(0, rgb(44, 16, 45) 31%, #6b3b55 90%);
`;

const Container2 = styled.div`
	display: flex;
	bottom: 0px;
	position: absolute;
	justify-content: flex-start; /* Esconde o conteúdo que sai da tela */
	width: 100%; /* Largura total do container */
	.pieceFloor {
		flex-shrink: 0; /* Garante que cada imagem mantenha seu tamanho */
		width: 206px; /* Defina a largura da imagem, ajuste conforme necessário */
		animation: ${autoRun} 5s linear infinite;
		margin-right: -1.5px;
	}
	@media (max-width: 767px) {
		bottom: 0px;
		.pieceFloor {
			width: 130px; /* Defina a largura da imagem, ajuste conforme necessário */
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

function Screen_3() {
	return (
		<Screen3 id="screen3">
			<Ballon_title>Teste de balao titulo</Ballon_title>
			<Balloon_text>Teste de balao texto</Balloon_text>
			<Container2>
				<img src={Floor} className="pieceFloor" />
				<img src={Floor} className="pieceFloor" />
				<img src={Floor} className="pieceFloor" />
				<img src={Floor} className="pieceFloor" />
				<img src={Floor} className="pieceFloor" />
				<img src={Floor} className="pieceFloor" />
				<img src={Floor} className="pieceFloor" />
				<img src={Floor} className="pieceFloor" />
				<img src={Floor} className="pieceFloor" />
				<img src={Floor} className="pieceFloor" />
				<img src={Floor} className="pieceFloor" />
				<img src={Floor} className="pieceFloor" />
				<img src={Floor} className="pieceFloor" />
				<img src={Floor} className="pieceFloor" />
				<img src={Floor} className="pieceFloor" />
				<img src={Floor} className="pieceFloor" />
				<img src={Floor} className="pieceFloor" />
			</Container2>
		</Screen3>
	);
}

export default Screen_3;
