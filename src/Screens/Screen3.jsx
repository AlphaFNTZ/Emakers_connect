import * as React from "react";
import { styled } from "styled-components";
import Details_3 from "../../public/assets/Terra.png";

const Screen3 = styled.section`
	display: flex;
	z-index: -2;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	scroll-snap-align: start;
	background: linear-gradient(0, rgb(44, 16, 45) 31%, #6b3b55 90%);
`;

const Details3 = styled.div`
	position: relative;
	z-index: 0;
	right: 0px;
	bottom: -36.7%;
`;

function Screen_3() {
	return (
		<Screen3 id="screen3">
			<Details3>
				<img src={Details_3} />
			</Details3>
		</Screen3>
	);
}

export default Screen_3;
