import React, { useEffect, useState } from "react";
import { validate } from "../../../services/auth";
import Requests from "../../../services/crud";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function AllOrders() {
	const [data, setData] = useState([]);
	const [valid, setValid] = useState(false);

	useEffect(() => {
		validate({
			access_token: JSON.parse(localStorage.getItem("user")),
		}).then((res) => {
			setValid(res);
		});

		Requests.orders.getAllFeedback().then((res) => {
			if (res.statusCode === 400) {
				return setData([]);
			}
			setData([...res]);
		});
	}, []);

	return (
		<>
			{valid === true ? (
				<Paper sx={{ p: 2, margin: "auto", maxWidth: 800, flexGrow: 1 }}>
					<Grid container spacing={2} direction='column'>
						{data.map((el) => {
							return (
								<div key={el.id}>
									<Grid item xs={12} sm container>
										<Grid item xs container direction='column' spacing={2}>
											<Grid item xs>
												<Typography
													gutterBottom
													variant='subtitle1'
													component='div'>
													{el.full_name}
												</Typography>
												<Typography variant='body2' gutterBottom>
													{el.number}
												</Typography>
											</Grid>
											<Grid item>
												<Typography sx={{ cursor: "pointer" }} variant='body2'>
													<Button variant='contained' href={el.link}>
														Читать
													</Button>
												</Typography>
											</Grid>
										</Grid>
									</Grid>
								</div>
							);
						})}
					</Grid>
				</Paper>
			) : null}
		</>
	);
}
