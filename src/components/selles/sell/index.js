import React, { useEffect, useState } from "react";
import Requests from "../../../services/crud/index";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { validate } from "../../../services/auth";
import { Button } from "@mui/material";
import "./style.css";
import BasicModal from "../../modal";
import ReactPlayer from "react-player";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Img = styled("img")({
	margin: "auto",
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

function Sell() {
	const [data, setData] = useState([]);
	const [valid, setValid] = useState(false);
	const [imgId, setId] = useState(0);
	
	let { id } = useParams();
	let history = useHistory();

	useEffect(() => {
		validate({
			access_token: JSON.parse(localStorage.getItem("user")),
		}).then((res) => {
			setValid(res);
		});
		Requests.sell.get(id).then((sell) => {
			setData({ ...sell });
		});
		setId(new RegExp(/\d\/(\w*)\/(\d*)/gm).exec(window.location.href)[2]);
	}, []);

	const deleteSell = (id) => {
		Requests.sell.delete(id).then(() => {
			history.push("/sell");
		});
	};

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={1} direction='column'>
					<Grid item xs={6}>
						<Item>
							<Img
								alt='complex'
								src={`http://localhost:5001/file?location=http%3A%2F%2Flocalhost%3A3000%2Fsell%2F${imgId}`}
							/>
						</Item>
					</Grid>
					<Grid item xs={6}>
						<Item>
							<div className='video'>
								<ReactPlayer url={data.video} />
							</div>
						</Item>
					</Grid>
					<Grid item xs={6}>
						<Item>{data.title || null}</Item>
					</Grid>
					<Grid item xs={6}>
						<Item className='content'>{data.content || null}</Item>
					</Grid>
					<Grid item xs={6}>
						<Item className='content'>Возраст: {data.age || null}</Item>
						<Item className='content'>Пол: {data.sex || null}</Item>
						<Item className='content'>Специализация: {data.type || null}</Item>
						<Item className='content'>Цена: {data.price || null}</Item>
					</Grid>
					<BasicModal name={data.age < 3 ? "Забронировать" : "Купить"} />
					{valid === true ? (
						<>
							<Button
								variant='contained'
								href={`${window.location.href}/change`}>
								Изменить
							</Button>
							<Button
								variant='contained'
								onClick={() => {
									deleteSell(data.id);
								}}>
								Удалить
							</Button>
						</>
					) : null}
				</Grid>
			</Box>
		</>
	);
}

export default Sell;
