import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { autoRun } from "../Animations/Animation_autoRun";
import BackGround_2 from "../../public/assets/Screen_2.png";
import Fence from "../../public/assets/Pedaco_cerca.png";
import Mountain from "../../public/assets/Montanha.png";
import Walk_1 from "../../public/assets/Sprite/Conjunto_gengar_andando/Walk_1.png";
import Walk_2 from "../../public/assets/Sprite/Conjunto_gengar_andando/Walk_2.png";
import Walk_3 from "../../public/assets/Sprite/Conjunto_gengar_andando/Walk_3.png";
import Walk_4 from "../../public/assets/Sprite/Conjunto_gengar_andando/Walk_4.png";
import Walk_5 from "../../public/assets/Sprite/Conjunto_gengar_andando/Walk_5.png";
import Walk_6 from "../../public/assets/Sprite/Conjunto_gengar_andando/Walk_6.png";
import Charizard_1 from "../../public/assets/Sprite/Conjunto_charizar/Charizard_1.png";
import Charizard_2 from "../../public/assets/Sprite/Conjunto_charizar/Charizard_2.png";
import Charizard_3 from "../../public/assets/Sprite/Conjunto_charizar/Charizard_3.png";
import Charizard_4 from "../../public/assets/Sprite/Conjunto_charizar/Charizard_4.png";
import Charizard_5 from "../../public/assets/Sprite/Conjunto_charizar/Charizard_5.png";
import Charizard_6 from "../../public/assets/Sprite/Conjunto_charizar/Charizard_6.png";
import Charizard_7 from "../../public/assets/Sprite/Conjunto_charizar/Charizard_7.png";
import Charizard_8 from "../../public/assets/Sprite/Conjunto_charizar/Charizard_8.png";
import AshWalk_1 from "../../public/assets/Sprite/Conjunto_mini_ash/Ash_mini_1.png";
import AshWalk_2 from "../../public/assets/Sprite/Conjunto_mini_ash/Ash_mini_2.png";
import AshWalk_3 from "../../public/assets/Sprite/Conjunto_mini_ash/Ash_mini_3.png";
import AshWalk_4 from "../../public/assets/Sprite/Conjunto_mini_ash/Ash_mini_4.png";

const walkImages = [Walk_1, Walk_2, Walk_3, Walk_4, Walk_5, Walk_6];

const ashWalkImages = [AshWalk_1, AshWalk_2, AshWalk_3, AshWalk_4];

const charizardImages = [
	Charizard_1,
	Charizard_2,
	Charizard_3,
	Charizard_4,
	Charizard_5,
	Charizard_6,
	Charizard_7,
	Charizard_8,
];

const Screen2 = styled.section`
	display: flex;
	position: relative;
	z-index: -2;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	scroll-snap-align: start;
	background-image: url(${BackGround_2});
	background-size: cover;
`;

const Landscape = styled.div`
	display: flex;
	z-index: 2;
	bottom: 20px;
	position: absolute;
	justify-content: flex-start;
	width: 100%;
	.pieceMountain {
		flex-shrink: 0; /* Garante que cada imagem mantenha seu tamanho */
		animation: ${autoRun} 200s linear infinite;
		margin-right: -1.5px;
	}
`;

const Container1 = styled.div`
	display: flex;
	z-index: 4;
	bottom: -70px;
	position: absolute;
	justify-content: flex-start; /* Esconde o conteúdo que sai da tela */
	width: 100%; /* Largura total do container */
	.pieceFence {
		flex-shrink: 0; /* Garante que cada imagem mantenha seu tamanho */
		width: 206px; /* Defina a largura da imagem, ajuste conforme necessário */
		animation: ${autoRun} 5s linear infinite;
		margin-right: -1.5px;
	}
`;

const CharacterGengar = styled.div`
	position: absolute;
	z-index: 5;
	bottom: 182px;
	left: 130px;
	img {
		height: 69px;
	}
`;

const CharacterCharizard = styled.div`
	position: absolute;
	z-index: 5;
	bottom: 182px;
	left: 50px;
	img {
		height: 45px;
	}
`;

const CharacterAsh = styled.div`
	position: absolute;
	z-index: 5;
	bottom: 176px;
	left: 180px;
	img {
		height: 100px;
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
`;

const Balloon_text = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	z-index: 6;
	color: #181717;
	background-color: white;
	width: 1200px;
	height: 500px;
`;

function Screen_2() {
	const [currentImage, setCurrentImage] = useState(0);
	const [currentAshImage, setCurrentAshImage] = useState(0);
	const [currentCharizardImage, setCurrentCharizardImage] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prevImage) => (prevImage + 1) % walkImages.length);
		}, 300); // Tempo em ms entre as mudanças de frame (ajuste conforme necessário)
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const intervalAsh = setInterval(() => {
			setCurrentAshImage((prevImage) => (prevImage + 1) % ashWalkImages.length);
		}, 350); // Tempo em ms entre as mudanças de frame (ajuste conforme necessário)
		return () => clearInterval(intervalAsh);
	}, []);

	useEffect(() => {
		const intervalCharizard = setInterval(() => {
			setCurrentCharizardImage(
				(prevImage) => (prevImage + 1) % charizardImages.length
			);
		}, 200); // Tempo em ms entre as mudanças de frame (ajuste conforme necessário)
		return () => clearInterval(intervalCharizard);
	}, []);

	return (
		<Screen2 id="screen2">
			<Landscape>
				<img src={Mountain} className="pieceMountain" />
				<img src={Mountain} className="pieceMountain" />
				<img src={Mountain} className="pieceMountain" />
				<img src={Mountain} className="pieceMountain" />
				<img src={Mountain} className="pieceMountain" />
			</Landscape>
			{/*<Ballon_title>Teste de balao titulo</Ballon_title>
			<Balloon_text>Teste de balao texto</Balloon_text>*/}

			<CharacterGengar>
				<img src={walkImages[currentImage]} alt="Character walking" />
			</CharacterGengar>

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
