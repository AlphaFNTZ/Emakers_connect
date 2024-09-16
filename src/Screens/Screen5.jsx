import * as React from "react";
import { styled } from "styled-components";
import BackGround_5 from "../../public/assets/Screen_5.png";

const Screen5 = styled.section`
	display: flex;
	position: relative;
	z-index: -2;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-image: url(${BackGround_5});
	background-size: cover;
`;

const FullWidthBox = styled.div`
	position: absolute;
	width: 100%;
	height: 486px;
	bottom: 170px;
	background-color: white;
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
	height: 128px;
	width: 100%;
	background-color: #111111;
`;

function Screen_5() {
	return (
		<Screen5 id="screen5">
			<FullWidthBox />
			<FooterStyled>
				<FooterPart1></FooterPart1>
			</FooterStyled>
		</Screen5>
	);
}

export default Screen_5;
