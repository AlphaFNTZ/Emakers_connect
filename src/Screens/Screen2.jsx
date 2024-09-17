import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
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

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	@media (max-width: 767px) {
		margin-bottom: 100px;
	}
`;

function Screen_2() {
	const [currentImage, setCurrentImage] = useState(0);
	const isMobile = useMediaQuery("(max-width: 767px)");

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
			<Content>
				<ContentScreens
					Content_Title={isMobile ? undefined : "Um pouco sobre nos"}
					Content_Text={
						isMobile
							? undefined
							: "A Emakers Jr. é a empresa júnior da Universidade Federal de Lavras (UFLA), uma associação sem fins lucrativos composta e gerida principalmente por estudantes dos cursos de Sistemas de Informação e Ciência da Computação. Unimos estratégias e métodos tradicionais à flexibilidade de uma visão jovem e conectada com o presente. Com uma equipe forte, unida e comprometida, entregamos excelência em cada projeto, aplicando metodologias ágeis para assegurar um ambiente de desenvolvimento dinâmico e eficiente."
					}
					Content_Mobile_Title={isMobile ? "Sobre nos" : undefined}
					Content_Mobile_Text={
						isMobile
							? "A Emakers Jr. é uma empresa júnior da UFLA, formada por estudantes de Sistemas de Informação e Ciência da Computação, oferecendo soluções inovadoras com metodologias ágeis."
							: undefined
					}
				/>
			</Content>
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
