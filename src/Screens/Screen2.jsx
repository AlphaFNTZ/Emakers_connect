import * as React from "react";
import { styled } from "styled-components";
import BackGround_2 from "../../public/assets/Screen_2.png";
import Details_2 from "../../public/assets/Cerca.png";

const Screen2 = styled.section`
	display: flex;
	z-index: -2;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	scroll-snap-align: start;
	background-image: url(${BackGround_2});
	background-size: cover;
`;

const Details2 = styled.div`
	position: relative;
	z-index: 0;
	right: 0px;
	bottom: -36%;
`;

function Screen_2() {
	return (
		<Screen2 id="screen2">
			<Details2>
				<img src={Details_2} />
			</Details2>
		</Screen2>
	);
}

export default Screen_2;
