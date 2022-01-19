import { Button, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { validate } from "../../services/auth";
import Requests from "../../services/crud/index";
import "./style.css";

function Contacts() {
	const [data, setData] = useState([{}]);
	const [valid, setValid] = useState(false);

	useEffect(() => {
		Requests.contacts.getAll().then((contacts) => {
			setData([...contacts]);
		});
		validate({
			access_token: JSON.parse(localStorage.getItem("user")),
		}).then((res) => {
			setValid(res);
		});
	}, []);

	return (
		<Paper sx={{ p: 2, margin: "auto", maxWidth: 800, flexGrow: 1 }}>
			<Grid container spacing={2} direction='column'>
				{valid === true ? (
					<Button variant='contained' href={`${window.location.href}/change`}>
						Изменить
					</Button>
				) : null}
				<Grid item xs={12} sm container>
					<Grid item xs>
						<span>{data[0].content || null}</span>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
}

export default Contacts;
