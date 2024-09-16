import React, { useState, useRef, useEffect } from "react";
import { createGlobalStyle, styled } from "styled-components";
import Logo_NavBar from "../public/assets/Logo_NavBar.png";
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
		overflow: hidden; /* Impede o scroll no body */
	}
`;

const Container = styled.div`
	scroll-snap-type: y mandatory;
	overflow-y: hidden; /* Vamos controlar a rolagem manualmente */
	overflow-x: hidden;
	height: 100vh;
	position: relative;
	z-index: 1;

	section {
		scroll-snap-align: start;
		height: 100vh;
		overflow: hidden; /* Garante que não haja rolagem dentro das seções */
	}
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
`;

function App() {
	const [currentPage, setCurrentPage] = useState(0);
	const [showNavBar, setShowNavBar] = useState(false);
	const containerRef = useRef(null);
	const sectionRefs = useRef([]);
	const debounceTimeout = useRef(null);

	const scrollToSection = (page) => {
		if (page >= 0 && page < sectionRefs.current.length) {
			sectionRefs.current[page].scrollIntoView({ behavior: "smooth" });
			setCurrentPage(page);
		}
	};

	const handleScroll = (event) => {
		if (debounceTimeout.current) {
			clearTimeout(debounceTimeout.current);
		}

		debounceTimeout.current = setTimeout(() => {
			if (event.deltaY > 0) {
				scrollToSection(currentPage + 1);
			} else {
				scrollToSection(currentPage - 1);
			}
		}, 150); // Ajuste o delay conforme necessário
	};

	useEffect(() => {
		const container = containerRef.current;
		if (container) {
			container.addEventListener("wheel", handleScroll, { passive: false });
		}
		return () => {
			if (container) {
				container.removeEventListener("wheel", handleScroll);
			}
		};
	}, [currentPage]);

	useEffect(() => {
		setShowNavBar(currentPage > 0);
	}, [currentPage]);

	return (
		<>
			<GlobalStyle />
			<NavBar isVisible={showNavBar}>
				<img src={Logo_NavBar} alt="Logo" />
			</NavBar>

			<Container ref={containerRef}>
				<section ref={(el) => (sectionRefs.current[0] = el)} id="section1">
					<Screen_1 />
				</section>
				<section ref={(el) => (sectionRefs.current[1] = el)} id="section2">
					<Screen_2 />
				</section>
				<section ref={(el) => (sectionRefs.current[2] = el)} id="section3">
					<Screen_3 />
				</section>
				<section ref={(el) => (sectionRefs.current[3] = el)} id="section4">
					<Screen_4 />
				</section>
				<section ref={(el) => (sectionRefs.current[4] = el)} id="section5">
					<Screen_5 />
				</section>
			</Container>
		</>
	);
}

export default App;
