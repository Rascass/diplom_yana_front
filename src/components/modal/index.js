import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function BasicModal(props) {
	const [open, setOpen] = React.useState(false);
	const [phone, setPhone] = React.useState("");
	const [fullname, setFullname] = React.useState("");

	const sumbitClick = (e) => {
		alert("Ожидайте вам скоро перезвонят");
		setOpen(false);
	};
	const handlePhone = (e) => {
		setPhone(e);
	};
	const handleFullname = (e) => {
		setFullname(e.target.value);
	};
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button variant='contained' onClick={handleOpen}>
        {props.name || "Записаться"}
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<MuiPhoneNumber
						sx={{ marginBottom: "20px" }}
						defaultCountry={"by"}
						onChange={handlePhone}
					/>
					<TextField
						helperText=' '
						id='demo-helper-text-aligned-no-helper'
						label='ФИО'
						onChange={handleFullname}
					/>
					<Button variant='contained' onClick={sumbitClick}>
						Записаться
					</Button>
				</Box>
			</Modal>
		</div>
	);
}
