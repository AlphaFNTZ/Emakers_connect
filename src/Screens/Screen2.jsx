import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { autoRun } from "../Animations/Animation_autoRun";
import BackGround_2 from "../../public/assets/Screen_2.png";
import Fence from "../../public/assets/Pedaco_cerca.png";
import Walk_1 from "../../public/assets/Sprite/Walk_1.png";
import Walk_2 from "../../public/assets/Sprite/Walk_2.png";
import Walk_3 from "../../public/assets/Sprite/Walk_3.png";
import Walk_4 from "../../public/assets/Sprite/Walk_4.png";
import Walk_5 from "../../public/assets/Sprite/Walk_5.png";
import Walk_6 from "../../public/assets/Sprite/Walk_6.png";
import Jump_1 from "../../public/assets/Sprite/Conjunto_pulo/Camada_29.png";
import Jump_2 from "../../public/assets/Sprite/Conjunto_pulo/Camada_30.png";
import Jump_3 from "../../public/assets/Sprite/Conjunto_pulo/Camada_31.png";
import Jump_4 from "../../public/assets/Sprite/Conjunto_pulo/Camada_32.png";
import Jump_5 from "../../public/assets/Sprite/Conjunto_pulo/Camada_33.png";
import Jump_6 from "../../public/assets/Sprite/Conjunto_pulo/Camada_34.png";
import Jump_7 from "../../public/assets/Sprite/Conjunto_pulo/Camada_35.png";
import Jump_8 from "../../public/assets/Sprite/Conjunto_pulo/Camada_36.png";
import Jump_9 from "../../public/assets/Sprite/Conjunto_pulo/Camada_37.png";
import Jump_10 from "../../public/assets/Sprite/Conjunto_pulo/Camada_38.png";

const walkImages = [Walk_1, Walk_2, Walk_3, Walk_4, Walk_5, Walk_6];

const jumpImages = [
	Jump_1,
	Jump_2,
	Jump_3,
	Jump_4,
	Jump_5,
	Jump_6,
	Jump_7,
	Jump_8,
	Jump_9,
	Jump_10,
];

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

const Character = styled.div`
	position: relative;
	z-index: 5;
	bottom: -43.9%;
	left: -850px;
	img {
		height: 70px;
	}
`;

function Screen_2() {
	const [currentImage, setCurrentImage] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prevImage) => (prevImage + 1) % walkImages.length);
		}, 250); // Tempo em ms entre as mudanças de frame (ajuste conforme necessário)
		return () => clearInterval(interval);
	}, []);

	return (
		<Screen2 id="screen2">
			<Character>
				<img src={walkImages[currentImage]} alt="Character walking" />
			</Character>
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
