import { Button, Grid, Paper, TextareaAutosize } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Requests from "../../../services/crud";

export default function ChangeContacts() {
	const [data, setData] = useState([{}]);

	let history = useHistory();

	const applyChanges = () => {
		Requests.contacts.update(data[0].id, data).then(() => {
			history.push(`/contacts`);
		});
	};

	const onContentChange = (e) => {
		setData({ ...data, content: e.target.value });
	};

	useEffect(() => {
		Requests.contacts.getAll().then((contacts) => {
			contacts = contacts.filter((el) => el.id === 1);
			setData([...contacts]);
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
						maxRows={Infinity}
						aria-label='maximum height'
						placeholder='Content'
						defaultValue={data[0].content}
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
