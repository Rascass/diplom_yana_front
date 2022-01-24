import { Button, Grid, Paper, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Requests from "../../../services/crud";
import axios from "axios";
import "./style.css";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function CreateHire() {
	const [data, setData] = useState({});
	const [file, setFile] = useState(null);

	let history = useHistory();

	const createHire = () => {
		Requests.hire.create(data).then(async (res) => {
			let id = (await res.json()).id;
			const dir = "hire";
			const name = id;
			const data = new FormData();
			data.append("file", file);
			data.append("name", name);
			data.append("dir", dir);
			axios.post("http://localhost:5001/file", data).then(() => {
				history.push("/hire");
			});
		});
	};

	const onTitleChange = (e) => {
		setData({ ...data, title: e.target.value });
	};

	const onContentChange = (e) => {
		setData({ ...data, content: e.target.value });
	};

	const handleChange = (file) => {
		setFile(file);
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
						placeholder='Title'
						maxRows={Infinity}
						aria-label='maximum height'
						defaultValue={data.title}
						style={{ width: 750 }}
						onChange={onTitleChange}
					/>
					<TextareaAutosize
						placeholder='Content'
						className='content'
						maxRows={Infinity}
						aria-label='maximum height'
						defaultValue={data.content}
						onChange={onContentChange}
						style={{ width: 750 }}
					/>
					<Button variant='contained' onClick={createHire}>
						Создать
					</Button>
				</Grid>
			</Paper>
		</>
	);
}
