import React, { useEffect, useRef, useState } from "react";
import { keyframes, styled } from "styled-components";
import BackGround_1 from "../../public/assets/Screen_1.png";
import Logo_NavBar from "../../public/assets/Logo_NavBar_Branco.png";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Screen1 = styled.div`
	display: flex;
	position: absolute;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: #270d32;
	font-family: "ArcadeClassic", sans-serif;
	position: relative;
`;

const H1_Styled = styled.h1`
	margin: 0;
	padding: 0;
	text-align: center;
	width: 813px;
	height: 259px;
	line-height: 0.7;
	font-size: 200px;
	font-weight: 200;
	overflow-wrap: break-word;
	@media (max-width: 769px) {
		width: 430px;
		height: 130px;
		font-size: 90px;
	}
`;

const H2_Styled = styled.h2`
	font-size: 40px;
	font-weight: 200;
	font-style: light;
	line-height: 0.7;
	text-align: center;
	width: 609px;
	height: 21px;
	margin-top: 5vh;
	word-spacing: 15px;
	@media (max-width: 769px) {
		width: 430px;
		height: 38px;
		font-size: 24px;
		word-spacing: 4px;
	}
`;

const Link_Styled = styled.a`
	display: flex;
	align-items: center;
	z-index: 5;
	margin-top: 50px;
	font-size: 30px;
	font-weight: 300;
	line-height: 0.7;
	text-align: center;
	width: auto;
	height: 21px;
	word-spacing: 15px;
	color: white;
	text-decoration: none;
	cursor: pointer;

	svg {
		position: absolute;
		opacity: 0;
		transform: translateX(0px);
		transition: opacity 0.3s ease, transform 0.3s ease;
	}

	&:hover svg {
		opacity: 1;
		transform: translateX(-40px);
	}

	@media (max-width: 769px) {
		margin-top: 10px;
		font-size: 24px;
	}
`;

const Escolhas = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 5vh;
	z-index: 6;
	@media (max-width: 769px) {
		margin-top: 2vh;
	}
`;

const Logo_NavBar_Branco = styled.div`
	display: flex;
	position: absolute;
	width: 100%;
	top: 20px;
	left: 20px;
	@media (max-width: 769px) {
		top: 20px;
		left: 0px;
		justify-content: center;
	}
`;

const Rain = styled.div`
	display: flex;
	width: 10px;
	height: 10px;
	background: white;
	position: absolute;
	z-index: 2;
	top: -150px;
	gap: 50px;

	animation: rain-fall var(--animation-duration) linear;
	animation-delay: var(--animation-delay);

	@keyframes rain-fall {
		0% {
			transform: translate(-130%, -100%); /* Manter rotação inicial */
		}
		100% {
			transform: translate(100vw, 130vh); /* Manter rotação final */
		}
	}
	@media (max-width: 769px) {
		width: 5px;
		height: 5px;
	}
`;

function Screen_1({ onLinkClick }) {
	const rainRefs = useRef([]);
	const [reset, setReset] = useState(false);

	useEffect(() => {
		const animationSettings = [
			{ duration: "3s", delay: "0s" },
			{ duration: "1s", delay: "1s" },
			{ duration: "2s", delay: "2s" },
		];

		rainRefs.current.forEach((rain, index) => {
			if (rain && animationSettings[index]) {
				const { duration, delay } = animationSettings[index];
				rain.style.setProperty("--animation-duration", duration);
				rain.style.setProperty("--animation-delay", delay);
			}
		});

		const interval = setInterval(() => {
			rainRefs.current.forEach((rain) => {
				if (rain) {
					rain.style.animation = "none"; // Stop current animation
					rain.offsetHeight; // Trigger reflow
					rain.style.animation = ""; // Restart animation
				}
			});
		}, 10000); // Reiniciar animação a cada 10 segundos

		return () => clearInterval(interval); // Limpar intervalo ao desmontar
	}, [reset]);

	useEffect(() => {
		setReset((prev) => !prev); // Alternar estado para forçar reinício
	}, []);

	const handleLinkClick = (e, page) => {
		e.preventDefault(); // Previne o comportamento padrão do link
		onLinkClick(page); // Chama a função para atualizar a página

		const targetId = e.currentTarget.getAttribute("href").substring(1);
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });

			// Garantir que a barra de navegação apareça
			setTimeout(() => {
				const navBar = document.querySelector("nav");
				if (navBar) {
					navBar.style.top = "0"; // Mostra a barra de navegação
				}
			}, 500); // Tempo para a transição da barra de navegação
		}
	};

	const starPositions = ["-40vw", "10vw", "40vw"];

	return (
		<Screen1>
			{Array.from({ length: 3 }).map((_, index) => (
				<Rain
					key={index}
					ref={(el) => (rainRefs.current[index] = el)}
					style={{ left: starPositions[index] }}
				/>
			))}
			<Logo_NavBar_Branco>
				<img src={Logo_NavBar} alt="" />
			</Logo_NavBar_Branco>
			<H1_Styled>Emakers connect</H1_Styled>
			<H2_Styled>21 a 25 de outubro de 2024</H2_Styled>
			<Escolhas>
				<Link_Styled
					underline="none"
					href="#section2"
					onClick={(e) => handleLinkClick(e, 1)}>
					<KeyboardDoubleArrowRightIcon
						sx={{
							color: "rgb(255, 106, 14)",
							fontSize: 35,
							marginRight: "10px",
						}}
					/>
					Quem somos nos
				</Link_Styled>
				<Link_Styled
					underline="none"
					href="#section3"
					onClick={(e) => handleLinkClick(e, 2)}>
					<KeyboardDoubleArrowRightIcon
						sx={{
							color: "rgb(255, 106, 14)",
							fontSize: 35,
							marginRight: "10px",
						}}
					/>
					Como sera o evento
				</Link_Styled>
				<Link_Styled
					underline="none"
					href="#section4"
					onClick={(e) => handleLinkClick(e, 3)}>
					<KeyboardDoubleArrowRightIcon
						sx={{
							color: "rgb(255, 106, 14)",
							fontSize: 35,
							marginRight: "10px",
						}}
					/>
					O que e o evento
				</Link_Styled>
			</Escolhas>
		</Screen1>
	);
}

export default Screen_1;
