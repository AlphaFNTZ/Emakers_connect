import * as React from "react";
import { styled } from "styled-components";
import BackGround_4 from "../../public/assets/Screen_4.png";
import Details_4 from "../../public/assets/Caverna.png";

const Screen4 = styled.section`
	display: flex;
	z-index: -2;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	scroll-snap-align: start;
	background-image: url(${BackGround_4});
	background-size: cover;
`;

const Details4 = styled.div`
	position: relative;
	z-index: 0;
	right: 0px;
	top: -35.5%;
`;

function Screen_4() {
	return (
		<Screen4 id="screen4">
			<Details4>
				<img src={Details_4} />
			</Details4>
		</Screen4>
	);
}

export default Screen_4;
