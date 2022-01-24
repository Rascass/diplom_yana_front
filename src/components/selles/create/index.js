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
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Requests from "../../../services/crud";
import axios from "axios";
import "./style.css";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function CreateSell() {
	const [data, setData] = useState({});
	const [types, setTypes] = useState([]);
	const [type, setType] = useState("");
	const [file, setFile] = useState(null);

	const typeChange = (event) => {
		setType(event.target.value);
	};

	const [currency, setCurrency] = useState("M");

	const sex = [
		{
			value: "М",
			label: "М",
		},
		{
			value: "Ж",
			label: "Ж",
		},
	];

	let history = useHistory();

	useEffect(() => {
		Requests.hoursesTypes.getAll().then((res) => {
			setTypes([...res]);
		});
	}, []);

	const createSell = () => {
		Requests.sell.create({ ...data, sex: currency, type }).then(async (res) => {
			let id = (await res.json()).id;
			const dir = "sell";
			const name = id;
			const data = new FormData();
			data.append("file", file);
			data.append("name", name);
			data.append("dir", dir);
			axios.post("http://localhost:5001/file", data).then(() => {
				history.push("/sell");
			});
		});
	};

	const sexChange = (event) => {
		setCurrency(event.target.value);
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

	const onAgeChange = (e) => {
		setData({ ...data, age: e.target.value });
	};

	const onPriceChange = (e) => {
		setData({ ...data, price: e.target.value.toString() });
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
							value={type}
							label='Age'
							onChange={typeChange}>
							{types.map((el) => {
								return <MenuItem value={el.name}>{el.name}</MenuItem>;
							})}
						</Select>
					</FormControl>
					<TextField
						sx={{ marginTop: "5px", marginBottom: "10px", width: "235px" }}
						InputProps={{ inputProps: { min: 0, max: 25 } }}
						type='number'
						id='outlined-basic'
						label='Возраст'
						variant='outlined'
						onChangeCapture={onAgeChange}
					/>
					<TextField
						sx={{ marginTop: "5px", marginBottom: "10px", width: "235px" }}
						InputProps={{ inputProps: { min: 0 } }}
						type='number'
						id='outlined-basic'
						label='Цена'
						variant='outlined'
						onChangeCapture={onPriceChange}
					/>
					<TextField
						select
						onChange={sexChange}
						value={currency}
						sx={{ marginTop: "5px", marginBottom: "10px", width: "235px" }}
						id='outlined-basic'
						label='Пол'
						variant='outlined'>
						{sex.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
					<Button variant='contained' onClick={createSell}>
						Создать
					</Button>
				</Grid>
			</Paper>
		</>
	);
}
