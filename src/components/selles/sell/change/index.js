import { Button, Grid, Paper, TextareaAutosize } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {
	useHistory,
	useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Requests from "../../../../services/crud";
import axios from "axios";
import "./style.css";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function ChangeSell() {
	const [data, setData] = useState({});

	let history = useHistory();
	let { id } = useParams();

	const applyChanges = () => {
		Requests.sell.update(id, data).then(() => {
			history.push(`/sell/${id}`);
		});
	};

	const onTitleChange = (e) => {
		setData({ ...data, title: e.target.value });
	};

	const onContentChange = (e) => {
		setData({ ...data, content: e.target.value });
	};

	useEffect(() => {
		Requests.sell.get(id).then((sell) => {
			setData({ ...sell });
		});
	}, []);

	const handleChange = (file) => {
		let reg = new RegExp(/\/(\w*)\/(\d*)\//gm).exec(window.location.href);
		const dir = reg[1];
		const name = reg[2];
		const data = new FormData();
		data.append("file", file);
		data.append("name", name);
		data.append("dir", dir);
		axios.post("http://localhost:5001/file", data).then((res) => {});
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
					<FileUploader
						handleChange={handleChange}
						name='file'
						types={fileTypes}
					/>
					<TextareaAutosize
						maxRows={Infinity}
						aria-label='maximum height'
						defaultValue={data.title}
						style={{ width: 750 }}
						onChange={onTitleChange}
					/>
					<TextareaAutosize
						className='content'
						maxRows={Infinity}
						aria-label='maximum height'
						defaultValue={data.content}
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