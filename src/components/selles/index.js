import React, { useEffect, useState } from "react";
import Requests from "../../services/crud/index";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import { validate } from "../../services/auth";
import { useHistory } from "react-router-dom";

const Img = styled("img")({
	margin: "auto",
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

function Selles() {
	const [data, setData] = useState([]);
	const [valid, setValid] = useState(false);

	let history = useHistory();

	useEffect(() => {
		validate({
			access_token: JSON.parse(localStorage.getItem("user")),
		}).then((res) => {
			setValid(res);
		});
		Requests.sell.getAll().then((selles) => {
			if (selles.statusCode === 400) {
				return setData([]);
			}
			setData([...selles]);
		});
	}, []);

	const deleteSell = (id) => {
		Requests.sell.delete(id).then(() => {
			Requests.sell.getAll().then((selles) => {
				setData([...selles]);
			});
		});
	};

	const createSell = () => {
		history.push(`/sell/create`);
	};

	return (
		<Paper sx={{ p: 2, margin: "auto", maxWidth: 800, flexGrow: 1 }}>
			<Grid container spacing={2} direction='column'>
				{valid === true ? (
					<Button variant='contained' onClick={createSell}>
						Создать
					</Button>
				) : null}
				{data.map((el) => {
					return (
						<div key={el.id}>
							<Grid item>
								<ButtonBase sx={{ width: 192, height: 192 }}>
									<Img
										alt='complex'
										src={`http://localhost:5001/file?location=http%3A%2F%2Flocalhost%3A3000%2Fsell%2F${el.id}`}
									/>
								</ButtonBase>
							</Grid>
							<Grid item xs={12} sm container>
								<Grid item xs container direction='column' spacing={2}>
									<Grid item xs>
										<Typography
											gutterBottom
											variant='subtitle1'
											component='div'>
											{el.title}
										</Typography>
										<Typography variant='body2' gutterBottom>
											{el.content.slice(0, 300) + "..."}
										</Typography>
									</Grid>
									<Grid item>
										<Typography sx={{ cursor: "pointer" }} variant='body2'>
											<Button
												variant='contained'
												href={`${window.location.href}/${el.id}`}>
												Читать
											</Button>
											{valid === true ? (
												<Button
													variant='contained'
													onClick={() => {
														deleteSell(el.id);
													}}>
													Удалить
												</Button>
											) : null}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</div>
					);
				})}
			</Grid>
		</Paper>
	);
}

export default Selles;
