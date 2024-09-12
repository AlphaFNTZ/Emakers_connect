import * as React from "react";
import { styled } from "styled-components";
import BackGround_1 from "../../public/assets/Screen_1.png";
import Logo_NavBar from "../../public/assets/Logo_NavBar_Branco.png";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Screen1 = styled.div`
	display: flex;
	z-index: -2;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	scroll-snap-align: start;
	background-image: url(${BackGround_1});
	background-size: cover;
	font-family: "ArcadeClassic", sans-serif;
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
`;

const Link_Styled = styled.a`
	display: flex;
	align-items: center;
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
		opacity: 0;
		transform: translateX(-20px);
		transition: opacity 0.3s ease, transform 0.3s ease;
	}

	&:hover svg {
		opacity: 1;
		transform: translateX(0);
	}
`;

const Escolhas = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 5vh;
`;

const Logo_NavBar_Branco = styled.div`
	position: absolute;
	top: 20px;
	left: 20px;
`;

function Screen_1() {
	return (
		<Screen1>
			<Logo_NavBar_Branco>
				<img src={Logo_NavBar} alt="" />
			</Logo_NavBar_Branco>
			<H1_Styled>Emakers connect</H1_Styled>
			<H2_Styled>21 a 25 de outubro de 2024</H2_Styled>
			<Escolhas>
				<Link_Styled underline="none" href="#screen2">
					<KeyboardDoubleArrowRightIcon
						sx={{
							color: "rgb(255, 106, 14)",
							fontSize: 35,
							marginRight: "10px",
						}}
					/>
					Quem somos nos
				</Link_Styled>
				<Link_Styled underline="none" href="#screen3">
					<KeyboardDoubleArrowRightIcon
						sx={{
							color: "rgb(255, 106, 14)",
							fontSize: 35,
							marginRight: "10px",
						}}
					/>
					Como sera o evento
				</Link_Styled>
				<Link_Styled underline="none" href="#screen4">
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
