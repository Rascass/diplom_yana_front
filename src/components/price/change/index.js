import { Button, Grid, Paper, TextareaAutosize } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Requests from "../../../services/crud";

export default function ChangePrice() {
	const [data, setData] = useState([{}]);

	let history = useHistory();

	const applyChanges = () => {
		Requests.price.update(data[0].id, data).then(() => {
			history.push(`/price`);
		});
	};

	const onContentChange = (e) => {
		setData({ ...data, content: e.target.value });
	};

	useEffect(() => {
		Requests.price.getAll().then((price) => {
      price = price.filter(el => el.id === 1);
			setData([...price]);
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
