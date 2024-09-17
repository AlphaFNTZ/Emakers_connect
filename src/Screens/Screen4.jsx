import * as React from "react";
import { useMediaQuery } from "@mui/material";
import { styled } from "styled-components";
import { autoRun } from "../Animations/Animation_autoRun";
import ContentScreens from "../Components/Content_screens";
import BackGround_4 from "../../public/assets/Screen_4.png";
import Cavern from "../../public/assets/Pedaco_caverna.png";
import Cavern_back from "../../public/assets/Cavena_fundo.png";

const Screen4 = styled.section`
	display: flex;
	position: relative;
	z-index: -2;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-image: url(${BackGround_4});
	background-size: cover;
`;

const Container3 = styled.div`
	display: flex;
	z-index: 5;
	top: 0px;
	position: absolute;
	justify-content: flex-start; /* Esconde o conteúdo que sai da tela */
	width: 100%; /* Largura total do container */
	.pieceCavern {
		flex-shrink: 0; /* Garante que cada imagem mantenha seu tamanho */
		width: 206px; /* Defina a largura da imagem, ajuste conforme necessário */
		animation: ${autoRun} 5s linear infinite;
		margin-right: -1.5px;
	}
	@media (max-width: 767px) {
		top: 0px;
		.pieceCavern {
			width: 110px; /* Defina a largura da imagem, ajuste conforme necessário */
		}
	}
`;

const Back_cavern = styled.div`
	display: flex;
	position: absolute;
	z-index: 2;
	top: 200px;
	justify-content: flex-start; /* Esconde o conteúdo que sai da tela */
	width: 100%; /* Largura total do container */
	.pieceCavernBack {
		flex-shrink: 0; /* Garante que cada imagem mantenha seu tamanho */
		width: 206px; /* Defina a largura da imagem, ajuste conforme necessário */
		animation: ${autoRun} 20s linear infinite;
		margin-right: -1.5px;
	}
	@media (max-width: 767px) {
		top: 120px;
		.pieceCavernBack {
			width: 110px;
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
		margin-top: 200px;
	}
`;

function Screen_4() {
	const isMobile = useMediaQuery("(max-width: 767px)");
	return (
		<Screen4 id="screen4">
			<Content>
				<ContentScreens
					Content_Title={isMobile ? undefined : "O formato do evento"}
					Content_Text={
						isMobile
							? undefined
							: "O Emakers Connect acontecerá de 21 a 25 de outubro, trazendo uma programação variada que inclui palestras tanto presenciais quanto online, além de momentos de interação como coffee breaks e atividades extras, garantindo uma experiência rica em networking e aprendizado. O evento se destaca por apresentar as principais tendências da área tecnológica e visa aproximar empresas e estudantes dos cursos de Ciência da Computação e Sistemas de Informação, incentivando o interesse desses jovens talentos pelo mercado. O público-alvo é composto por estudantes, profissionais e entusiastas de tecnologia, caracterizado por seu engajamento e busca por estabelecer contatos com líderes do setor. O Emakers Connect oferece uma oportunidade única para empresas se conectarem com futuros talentos e fortalecerem suas relações com a comunidade acadêmica."
					}
					Content_Mobile_Title={isMobile ? "O formato do evento" : undefined}
					Content_Mobile_Text={
						isMobile
							? "O Emakers Connect, que ocorrerá de 21 a 25 de outubro, é um evento que oferece palestras presenciais e online, além de momentos de networking e aprendizado, como coffee breaks e atividades extras. Focado nas principais tendências tecnológicas, o evento aproxima empresas e estudantes de Ciência da Computação e Sistemas de Informação, promovendo oportunidades de contato entre jovens talentos e líderes do setor. É uma chance para empresas se conectarem com futuros profissionais e fortalecerem laços com a comunidade acadêmica."
							: undefined
					}
				/>
			</Content>
			<Back_cavern>
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
				<img src={Cavern_back} className="pieceCavernBack" />
			</Back_cavern>
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
