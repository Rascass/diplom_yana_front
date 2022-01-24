import {
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	TextareaAutosize,
	TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {
	useHistory,
	useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Requests from "../../../../services/crud";
import axios from "axios";
import "./style.css";

const fileTypes = ["png"];

export default function ChangeSell() {
	const [data, setData] = useState({});
	const [types, setTypes] = useState([]);

	const sex = [
		{
			value: "М",
		},
		{
			value: "Ж",
		},
	];

	let history = useHistory();
	let { id } = useParams();

	const applyChanges = () => {
		console.log(data);
		Requests.sell.update(id, data).then(() => {
			history.push(`/sell/${id}`);
		});
	};

	const onAgeChange = (e) => {
		setData({ ...data, age: e.target.value.toString() });
	};

	const onTitleChange = (e) => {
		setData({ ...data, title: e.target.value });
	};

	const onContentChange = (e) => {
		setData({ ...data, content: e.target.value });
	};

	const onLinkChange = (e) => {
		setData({ ...data, video: e.target.value });
	};

	const onSexChange = (e) => {
		setData({ ...data, sex: e.target.value });
	};

	const typeChange = (e) => {
		setData({ ...data, type: e.target.value });
	};

	const onPriceChange = (e) => {
		setData({ ...data, price: e.target.value.toString() });
	};

	useEffect(() => {
		Requests.hoursesTypes.getAll().then((res) => {
			setTypes([...res]);
		});
		Requests.sell.get(id).then((sell) => {
			setData({ ...sell, age: sell.age.toString() });
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

	console.log(data);

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
						maxSize={5}
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
						placeholder='Video'
						className='video'
						maxRows={Infinity}
						aria-label='maximum height'
						defaultValue={data.video}
						onChange={onLinkChange}
						style={{ width: 750 }}
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
					<FormControl>
						<InputLabel
							sx={{ marginTop: "10px" }}
							id='demo-simple-select-label'>
							Тип
						</InputLabel>
						<Select
							sx={{ marginTop: "10px", marginBottom: "10px", width: "235px" }}
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={data.type}
							label='Age'
							onChange={typeChange}>
							{types.map((el) => {
								return <MenuItem value={el.name}>{el.name}</MenuItem>;
							})}
						</Select>
					</FormControl>
					<TextField
						sx={{ marginTop: "10px", marginBottom: "10px", width: "235px" }}
						InputProps={{ inputProps: { min: 0, max: 25 } }}
						type='number'
						id='outlined-basic'
						label='Возраст'
						variant='outlined'
						onChangeCapture={onAgeChange}
						value={data.age}
					/>
					<TextField
						select
						onChange={onSexChange}
						value={data.sex}
						sx={{ marginTop: "5px", marginBottom: "10px", width: "235px" }}
						id='outlined-basic'
						label='Пол'
						variant='outlined'>
						{sex.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.value}
							</MenuItem>
						))}
					</TextField>
					<TextField
						sx={{ marginTop: "5px", marginBottom: "10px", width: "235px" }}
						InputProps={{ inputProps: { min: 0 } }}
						value={data.price}
						type='number'
						id='outlined-basic'
						label='Цена'
						variant='outlined'
						onChangeCapture={onPriceChange}
					/>
					<Button variant='contained' onClick={applyChanges}>
						Изменить
					</Button>
				</Grid>
			</Paper>
		</>
	);
}
