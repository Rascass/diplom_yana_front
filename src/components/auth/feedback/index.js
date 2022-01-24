import { Grid, Paper, TextareaAutosize, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { validate } from "../../../services/auth";
import Requests from "../../../services/crud";

export default function Feedback() {
	const [data, setData] = useState([]);
	const [valid, setValid] = useState(false);

	useEffect(() => {
		validate({
			access_token: JSON.parse(localStorage.getItem("user")),
		}).then((res) => {
			setValid(res);
		});

		Requests.feedback.getAll().then((data) => {
			setData([...data]);
		});
	}, []);

	console.log(data);

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
												<Typography variant='body2' gutterBottom>
													{el.text}
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
