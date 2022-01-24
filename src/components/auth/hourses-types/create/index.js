import { Button, Grid, Paper, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Requests from "../../../../services/crud";

export default function CreateHoursesTypes() {
	const [name, setName] = useState("");

	let history = useHistory();

	const applyChanges = () => {
		Requests.hoursesTypes.create({ name }).then(() => {
			history.push(`/admin/hourses-types`);
		});
	};

	const onContentChange = (e) => {
		setName(e.target.value);
	};

	return (
		<>
			<Paper
				sx={{
					p: 2,
					margin: "auto",
					maxWidth: 800,
					flexGrow: 1,
				}}>
				<Grid
					container
					direction='column'
					justifyContent='center'
					alignItems='center'>
					<TextareaAutosize
						placeholder='Content'
						maxRows={Infinity}
						aria-label='maximum height'
						onChange={onContentChange}
						style={{ width: 750 }}
					/>
					<Button variant='contained' onClick={applyChanges}>
						Создать
					</Button>
				</Grid>
			</Paper>
		</>
	);
}
