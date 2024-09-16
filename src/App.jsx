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
			border-radius: 5px;
			box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
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

const BurguerSyled = styled.label`
	position: relative;
	width: 40px;
	height: 30px;
	background: transparent;
	cursor: pointer;
	display: block;
	align-self: center;
	margin-left: 20px;
	input {
		display: none;
	}

	span {
		display: block;
		position: absolute;
		height: 4px;
		width: 100%;
		background: black;
		border-radius: 9px;
		opacity: 1;
		left: 0;
		transform: rotate(0deg);
		transition: 0.25s ease-in-out;
	}

	span:nth-of-type(1) {
		top: 0px;
		transform-origin: left center;
	}

	span:nth-of-type(2) {
		top: 50%;
		transform: translateY(-50%);
		transform-origin: left center;
	}

	span:nth-of-type(3) {
		top: 100%;
		transform-origin: left center;
		transform: translateY(-100%);
	}

	input:checked ~ span:nth-of-type(1) {
		transform: rotate(45deg);
		top: 0px;
		left: 5px;
	}

	input:checked ~ span:nth-of-type(2) {
		width: 0%;
		opacity: 0;
	}

	input:checked ~ span:nth-of-type(3) {
		transform: rotate(-45deg);
		top: 28px;
		left: 5px;
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
				{isMobile ? (
					<BurguerSyled className="burger" htmlFor="burger">
						<input
							onClick={isMobile ? handleMenuClick : null}
							type="checkbox"
							id="burger"
						/>
						<span></span>
						<span></span>
						<span></span>
					</BurguerSyled>
				) : (
					<img src={Logo_NavBar} alt="Logo" />
				)}
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
