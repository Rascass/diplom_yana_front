import { Button, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { validate } from "../../services/auth";
import Requests from "../../services/crud/index";
import BasicModal from "../modal";
import "./style.css";

function Price() {
	const [data, setData] = useState([{}]);
	const [valid, setValid] = useState(false);

	useEffect(() => {
		Requests.price.getAll().then((price) => {
			price = price.filter((el) => el.id === 1);
			setData([...price]);
		});
		validate({
			access_token: JSON.parse(localStorage.getItem("user")),
		}).then((res) => {
			setValid(res);
		});
	}, []);

	return (
		<>
			<BasicModal />
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
				<Button
					variant='contained'
					href='http://localhost:5000/api/prices/price.txt'
					download
					target='_blank'>
					Скачать прайс лист
				</Button>
			</Paper>
		</>
	);
}

export default Price;
