import * as React from "react";
import { styled } from "styled-components";
import { autoRun } from "../Animations/Animation_autoRun";
import Floor from "../../public/assets/Pedaco_chao.png";
import ContentScreens from "../Components/Content_screens";

const Screen3 = styled.section`
	display: flex;
	position: relative;
	z-index: -2;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
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

function Screen_3() {
	return (
		<Screen3 id="screen3">
			<ContentScreens
				Content_Title="Sobre o evento"
				Content_Text="A proposta do Emakers Connect é ser um evento dinâmico e inovador,
				criado para conectar a comunidade acadêmica ao mundo da tecnologia. Com
				um formato inclusivo e aberto a estudantes de todos os cursos, o evento
				se destaca por seu foco nas tendências mais recentes do mercado
				tecnológico, oferecendo uma plataforma única para aprendizado e
				desenvolvimento profissional. Além de palestras e workshops, o Emakers
				Connect promove um ambiente de networking, facilitando a interação entre
				empresas, profissionais experientes e futuros talentos, proporcionando
				oportunidades reais de conexão e troca de experiências que podem abrir
				portas para colaborações e carreiras promissoras no setor. O evento é
				pensado para ser um ponto de encontro onde a inovação e a tecnologia se
				encontram com o potencial e a criatividade dos estudantes."
			/>
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
