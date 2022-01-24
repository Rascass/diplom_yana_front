import React from "react";
import BasicModal from "../modal";
import { Box, Container, Row, Column, FooterLink, Heading } from "./style";

const Footer = () => {
	return (
		<Box>
			<Container>
				<BasicModal name="Оставить отзыв" feedback={true} />
			</Container>
		</Box>
	);
};
export default Footer;
