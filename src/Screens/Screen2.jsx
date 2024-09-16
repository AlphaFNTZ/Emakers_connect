import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { autoRun } from "../Animations/Animation_autoRun";
import ContentScreens from "../Components/Content_screens";
import BackGround_2 from "../../public/assets/Screen_2.png";
import Fence from "../../public/assets/Pedaco_cerca.png";
import Mountain from "../../public/assets/Montanha.png";
import Walk_1 from "../../public/assets/Sprite/Conjunto_gengar_andando/Walk_1.png";
import Walk_2 from "../../public/assets/Sprite/Conjunto_gengar_andando/Walk_2.png";
import Walk_3 from "../../public/assets/Sprite/Conjunto_gengar_andando/Walk_3.png";
import Walk_4 from "../../public/assets/Sprite/Conjunto_gengar_andando/Walk_4.png";
import Walk_5 from "../../public/assets/Sprite/Conjunto_gengar_andando/Walk_5.png";
import Walk_6 from "../../public/assets/Sprite/Conjunto_gengar_andando/Walk_6.png";

const walkImages = [Walk_1, Walk_2, Walk_3, Walk_4, Walk_5, Walk_6];

const Screen2 = styled.section`
	display: flex;
	position: relative;
	z-index: -2;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
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
	@media (max-width: 767px) {
		bottom: 70px;
		.pieceMountain {
			width: 700px;
		}
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
	@media (max-width: 767px) {
		bottom: -15px;
		.pieceFence {
			width: 110px; /* Defina a largura da imagem, ajuste conforme necessário */
		}
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
	@media (max-width: 767px) {
		bottom: 118px;
		left: 25px;
		img {
			height: 50px;
		}
	}
`;

function Screen_2() {
	const [currentImage, setCurrentImage] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prevImage) => (prevImage + 1) % walkImages.length);
		}, 300); // Tempo em ms entre as mudanças de frame (ajuste conforme necessário)
		return () => clearInterval(interval);
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
			<ContentScreens
				Content_Title="Um pouco sobre nos"
				Content_Text="A Emakers Jr. e a empresa junior da Universidade Federal de Lavras
					(UFLA), uma associacao sem fins lucrativos composta e gerida
					principalmente por estudantes dos cursos de Sistemas de Informacao e
					Ciencia da Computacao. Unimos estrategias e metodos tradicionais a
					flexibilidade de uma visao jovem e conectada com o presente. Com uma
					equipe forte, unida e comprometida, entregamos excelencia em cada
					projeto, aplicando metodologias ageis para assegurar um ambiente de
					desenvolvimento dinamico e eficiente."
			/>
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
