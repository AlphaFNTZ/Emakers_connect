import React, { useState, useEffect } from "react";
import { createGlobalStyle, styled } from "styled-components";
import Logo_NavBar from "../public/assets/Logo_NavBar.png";
import Icon_Menu from "../public/assets/Icons/icon_menu.png";
import Screen_1 from "./Screens/Screen1";
import Screen_2 from "./Screens/Screen2";
import Screen_3 from "./Screens/Screen3";
import Screen_4 from "./Screens/Screen4";
import Screen_5 from "./Screens/Screen5";

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Roboto;
		color: #ffffff;
	}
`;

const Conteiner = styled.div`
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
	overflow-x: hidden;
	height: 100vh;
	z-index: 1;
`;

const NavBar = styled.div`
	display: flex;
	position: fixed;
	top: ${(props) => (props.isVisible ? "0" : "-100px")};
	left: 0;
	height: 100px;
	width: 100%;
	background-color: white;
	border-bottom: 0.5px solid #111111;
	z-index: 10;
	transition: top 0.5s ease;

	img {
		align-self: center;
		height: 60px;
		width: 190px;
		margin-left: 20px;
	}

	@media (max-width: 767px) {
		height: 67px;
		img {
			cursor: pointer;
			align-self: center;
			height: 40px;
			width: 40px;
			margin-left: 20px;
		}
	}
`;

const Menu = styled.div`
	display: ${(props) => (props.isOpen ? "flex" : "none")};
	flex-direction: row;
	position: absolute;
	left: 0px;
	height: 100vh;
	width: 100%;
	z-index: 9;
	@media (min-width: 768px) {
		display: none;
	}
`;

const ContentMenu = styled.section`
	@media (max-width: 767px) {
		display: flex;
		z-index: 8;
		position: absolute;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 67px;
		height: calc(100vh - 67px);
		width: 305px;
		left: 0px;
		background-color: white;
	}
`;

const Filter = styled.section`
	@media (max-width: 767px) {
		display: flex;
		z-index: 7;
		position: absolute;
		margin-top: 67px;
		height: calc(100vh - 67px);
		width: 100%;
		background-color: #00000070;
	}
`;

function App() {
	const [currentPage, setCurrentPage] = React.useState(1);
	const [showNavBar, setShowNavBar] = React.useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleScroll = (event) => {
		const scrollY = event.target.scrollTop;
		const page = Math.round(scrollY / window.innerHeight) + 1;
		setCurrentPage(page);

		if (page > 1) {
			setShowNavBar(true);
		} else {
			setShowNavBar(false);
		}
	};

	const handleMenuClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 767);
		};

		window.addEventListener("resize", handleResize);

		// Cleanup listener on unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<GlobalStyle />
			<NavBar isVisible={showNavBar}>
				<img
					src={isMobile ? Icon_Menu : Logo_NavBar}
					alt="Logo"
					onClick={isMobile ? handleMenuClick : null}
				/>
			</NavBar>
			<Menu isOpen={isMenuOpen}>
				<ContentMenu />
				<Filter />
			</Menu>
			<Conteiner onScroll={handleScroll}>
				<Screen_1 />
				<Screen_2 />
				<Screen_3 />
				<Screen_4 />
				<Screen_5 />
			</Conteiner>
		</>
	);
}

export default App;
