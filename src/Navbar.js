import React, { useEffect, useState } from 'react';
import './Navbar.css'

function Navbar() {

	const [show, handleShow] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else {
				handleShow(false)
			}
		});
		return () => {
			window.removeEventListener('scroll');
		}
	}, [])

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
				alt="Netflix-Logo"
				className="nav__logo"
			/>
			<img
				src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
				alt="Navbar-Avatar"
				className="nav__avatar"
			/>
		</div>
	);
}

export default Navbar