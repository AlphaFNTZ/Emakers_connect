import React from "react";
import { styled } from "styled-components";

const Ballon_title = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	z-index: 6;
	color: #181717;
	background-color: white;
	height: 80px;
	padding-left: 20px;
	padding-right: 20px;
	margin-bottom: 50px;
	word-spacing: 15px;
	margin-top: 5vh;
	font-family: "ArcadeClassic", sans-serif;
	@media (max-width: 767px) {
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
	max-width: 1100px;
	height: auto;
	max-height: 500px;
	font-family: "Mukta", sans-serif;
	@media (max-width: 767px) {
		width: 92%;
		min-width: 300px;
		height: 400px;
		margin-bottom: 100px;
	}
`;

const Text = styled.p`
	line-height: 0.9;
	font-size: 25px;
	font-weight: 500;
	overflow-wrap: break-word;
	word-spacing: 15px;
	margin: 20px;
`;

const Title = styled.h1`
	line-height: 0.7;
	font-size: 50px;
	font-weight: 200;
	overflow-wrap: break-word;
`;

function ContentScreens({ Content_Title, Content_Text }) {
	return (
		<>
			<Ballon_title>
				<Title>{Content_Title}</Title>
			</Ballon_title>
			<Balloon_text>
				<Text>{Content_Text}</Text>
			</Balloon_text>
		</>
	);
}

export default ContentScreens;
