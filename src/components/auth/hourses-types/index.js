import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { validate } from "../../../services/auth";
import Requests from "../../../services/crud";

export default function HourseTypes() {
	const [data, setData] = useState([]);
	const [valid, setValid] = useState(false);

	useEffect(() => {
		validate({
			access_token: JSON.parse(localStorage.getItem("user")),
		}).then((res) => {
			setValid(res);
		});

		Requests.hoursesTypes.getAll().then((data) => {
			setData([...data]);
		});
	}, []);

	const deleteHoursesType = (id) => {
		Requests.hoursesTypes.delete(id).then(() => {
			Requests.hoursesTypes.getAll().then((data) => {
				setData([...data]);
			});
		});
	};

	return (
		<>
			{valid === true ? (
				<Paper sx={{ p: 2, margin: "auto", maxWidth: 800, flexGrow: 1 }}>
					<Grid container spacing={2} direction='column'>
						<Button href={`${window.location.href}/create`}>Добавить</Button>
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
													{el.name}
												</Typography>
											</Grid>
											<Grid item>
												<Button
													variant='contained'
													href={`${window.location.href}/${el.id}`}>
													Изменить
												</Button>
												<Button
													variant='contained'
													onClick={() => deleteHoursesType(el.id)}>
													Удаить
												</Button>
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
