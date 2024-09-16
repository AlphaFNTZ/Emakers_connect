import * as React from "react";
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
		margin-top: 120px;
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

function Screen_4() {
	return (
		<Screen4 id="screen4">
			<ContentScreens
				Content_Title="O formato do evento"
				Content_Text="O Emakers Connect acontecerá de 21 a 25 de outubro, trazendo uma
				programação variada que inclui palestras tanto presenciais quanto
				online. O evento também proporcionará momentos de interação, como coffee
				breaks e atividades extras, garantindo uma experiência rica em
				networking e aprendizado. Com o objetivo de levar o que há de mais atual
				no mercado tecnológico, o Emakers Connect se destaca por apresentar as
				principais tendências da área. Além disso, o evento visa aproximar
				empresas e estudantes dos cursos de Ciência da Computação e Sistemas de
				Informação, incentivando o interesse desses jovens talentos pelo
				mercado. O público-alvo é composto por estudantes, profissionais e
				entusiastas de tecnologia, caracterizado por seu engajamento e busca por
				estabelecer contatos com líderes do setor. O Emakers Connect oferece uma
				oportunidade única para empresas se conectarem com futuros talentos e
				fortalecerem suas relações com a comunidade acadêmica."
			/>
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
