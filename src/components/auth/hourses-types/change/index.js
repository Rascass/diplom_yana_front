import { Button, Grid, Paper, TextareaAutosize } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
	useHistory,
	useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Requests from "../../../../services/crud";

export default function ChangeHoursesTypes() {
	const [data, setData] = useState({});
	const [name, setName] = useState("");

	let history = useHistory();
	let { id } = useParams();

	const applyChanges = () => {
		Requests.hoursesTypes.update(id, { name }).then(() => {
			history.push(`/admin/hourses-types`);
		});
	};

	const onContentChange = (e) => {
		setName(e.target.value);
	};

	useEffect(() => {
		Requests.hoursesTypes.get(id).then((type) => {
			setData({ ...type });
			setName(type.name);
		});
	}, []);

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
						defaultValue={name}
						onChange={onContentChange}
						style={{ width: 750 }}
					/>
					<Button variant='contained' onClick={applyChanges}>
						Изменить
					</Button>
				</Grid>
			</Paper>
		</>
	);
}
