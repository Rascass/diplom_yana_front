import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { URLS, DropdownURLS } from "../../services/crud/constants/index";

const DOMAIN = "http://localhost:3000/";

export default function Navigation() {
	return (
		<Navbar bg='light' variant='light'>
			<Container>
				<Navbar.Brand href='/'>Кони IGo</Navbar.Brand>
				<Nav className='me-auto'>
					{URLS.map((value, index) => (
						<Nav.Link key={index} href={DOMAIN + value.href}>
							{value.title}
						</Nav.Link>
					))}
					<NavDropdown title='Услуги' id='navbarScrollingDropdown'>
						{DropdownURLS.map((value, index) => (
							<NavDropdown.Item href={DOMAIN + value.href} key={index}>
								{value.title}
							</NavDropdown.Item>
						))}
					</NavDropdown>
				</Nav>
			</Container>
		</Navbar>
	);
}
