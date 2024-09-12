import * as React from "react";
import { styled } from "styled-components";
import BackGround_5 from "../../public/assets/Screen_5.png";

const Screen5 = styled.section`
	display: flex;
	z-index: -2;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	scroll-snap-align: start;
	background-image: url(${BackGround_5});
	background-size: cover;
`;

const FullWidthBox = styled.div`
	width: 100%;
	height: 660px;
	background-color: white;
	position: relative;
	bottom: -19.3%;
`;

function Screen_5() {
	return (
		<Screen5 id="screen5">
			<FullWidthBox />
		</Screen5>
	);
}

export default Screen_5;
