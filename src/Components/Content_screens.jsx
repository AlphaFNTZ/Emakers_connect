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
	width: 600px;
	height: 80px;
	margin-bottom: 50px;
	margin-top: 5vh;
	word-spacing: 15px;
	font-family: "ArcadeClassic", sans-serif;
	@media (max-width: 769px) {
		width: 300px;
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
	max-height: 600px;
	font-family: "Titillium Web", sans-serif;
	@media (max-width: 769px) {
		width: 92%;
		min-width: 300px;
		height: auto;
		margin-bottom: 100px;
	}
`;

const Balloon_aux_title_1 = styled.div`
	position: absolute;
	background-color: white;
	z-index: 5;
	width: calc(100% + 20px);
	height: calc(100% - 20px);
`;

const Balloon_aux_title_2 = styled.div`
	position: absolute;
	background-color: white;
	z-index: 5;
	width: calc(100% - 20px);
	height: calc(100% + 20px);
`;

const Balloon_aux_text_1 = styled.div`
	position: absolute;
	background-color: white;
	z-index: 5;
	width: calc(100% + 20px);
	height: calc(100% - 20px);
`;

const Balloon_aux_text_2 = styled.div`
	position: absolute;
	background-color: white;
	z-index: 5;
	width: calc(100% - 20px);
	height: calc(100% + 20px);
`;

const Text = styled.p`
	z-index: 6;
	line-height: 1.1;
	font-size: 25px;
	font-weight: 600;
	overflow-wrap: break-word;
	//word-spacing: 1px;
	margin: 40px;
	text-align: justify;
	@media (max-width: 769px) {
		line-height: 1;
		font-size: 19px;
		font-weight: 600;
		overflow-wrap: break-word;
		word-spacing: 15px;
		margin: 20px;
		word-spacing: -2px;
	}
`;

const Title = styled.h1`
	z-index: 6;
	line-height: 0.7;
	font-size: 50px;
	font-weight: 200;
	text-align: center;
	padding-left: 20px;
	padding-right: 20px;
	overflow-wrap: break-word;
	@media (max-width: 769px) {
		font-size: 30px;
	}
`;

function ContentScreens({
	Content_Title,
	Content_Text,
	Content_Mobile_Title,
	Content_Mobile_Text,
}) {
	return (
		<>
			{Content_Title && (
				<Ballon_title>
					<Title>{Content_Title}</Title>
					<Balloon_aux_title_1 />
					<Balloon_aux_title_2 />
				</Ballon_title>
			)}
			{Content_Text && (
				<Balloon_text>
					<Text>{Content_Text}</Text>
					<Balloon_aux_text_1 />
					<Balloon_aux_text_2 />
				</Balloon_text>
			)}
			{Content_Mobile_Title && (
				<Ballon_title>
					<Title>{Content_Mobile_Title}</Title>
					<Balloon_aux_title_1 />
					<Balloon_aux_title_2 />
				</Ballon_title>
			)}
			{Content_Mobile_Text && (
				<Balloon_text>
					<Text>{Content_Mobile_Text}</Text>
					<Balloon_aux_text_1 />
					<Balloon_aux_text_2 />
				</Balloon_text>
			)}
		</>
	);
}

export default ContentScreens;
