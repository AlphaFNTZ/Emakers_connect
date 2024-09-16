import * as React from "react";
import { styled } from "styled-components";
import BackGround_5 from "../../public/assets/Screen_5.png";
import Logo_Branco from "../../public/assets/Logo_footer_branco.png";
import Gengar from "../../public/assets/Sprite/gengar.gif";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Screen5 = styled.section`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	scroll-snap-align: start;
	background-image: url(${BackGround_5});
	background-size: cover;
`;

const FullWidthBox = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 486px;
	bottom: 170px;
	background-color: white;
	color: black;
	@media (max-width: 767px) {
		bottom: 173px;
		height: 455px;
	}
`;

const FooterStyled = styled.footer`
	position: absolute;
	height: 170px;
	width: 100%;
	bottom: 0px;
	background-color: black;
`;

const FooterPart1 = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 128px;
	width: 100%;
	background-color: #111111;
`;

const FooterPart2 = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 42px;
	align-items: center;
	justify-content: center;
`;

const Icons = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 20px;
	width: 100%;

	.MuiSvgIcon-root {
		font-size: 45px;
		cursor: pointer;
	}
`;

const Icon_Button = styled.a`
	color: white;
`;

const H1_Styled = styled.h1`
	position: absolute;
	font-family: "ArcadeClassic", sans-serif;
	top: 200px;
	font-size: 70px;
	font-weight: 200;
	margin: 0;
	padding: 0;
	text-align: center;
	line-height: 0.7;
	overflow-wrap: break-word;
`;

const P_Styled = styled.p`
	font-family: "ArcadeClassic", sans-serif;
	font-size: 24px;
	font-weight: 200;
	margin: 0;
	padding: 0;
	line-height: 0.7;
`;

const Icon_Footer = styled.div`
	position: absolute;
	left: 5px;
	img {
		width: 38px;
	}
`;

const Caracter_Gengar = styled.div`
	position: absolute;
	z-index: 2;
	top: 300px;
`;

function Screen_5() {
	return (
		<Screen5 id="screen5">
			<H1_Styled>Contamos com a sua presenca</H1_Styled>
			{/*<Caracter_Gengar>
				<img width={"170px"} src={Gengar} />
			</Caracter_Gengar>*/}
			<FullWidthBox>
				<H1_Styled className="custom-h1">Patrocinadores</H1_Styled>
			</FullWidthBox>
			<FooterStyled>
				<FooterPart1>
					<Icons>
						<Icon_Button
							href="https://www.instagram.com/emakersjr/"
							target="_blank"
							rel="noopener noreferrer">
							<InstagramIcon />
						</Icon_Button>
						<Icon_Button
							href="https://www.facebook.com/emakersjr"
							target="_blank"
							rel="noopener noreferrer">
							<FacebookIcon />
						</Icon_Button>
						<Icon_Button
							href="https://www.linkedin.com/company/emakersjr"
							target="_blank"
							rel="noopener noreferrer">
							<LinkedInIcon />
						</Icon_Button>
						<Icon_Button
							href="mailto:emakers.junior@ufla.br"
							target="_blank"
							rel="noopener noreferrer">
							<EmailIcon />
						</Icon_Button>
					</Icons>
				</FooterPart1>
				<FooterPart2>
					<Icon_Footer>
						<img src={Logo_Branco} />
					</Icon_Footer>
					<P_Styled>Todos os direitos reservados - Emakers jr 2024</P_Styled>
				</FooterPart2>
			</FooterStyled>
		</Screen5>
	);
}

export default Screen_5;
