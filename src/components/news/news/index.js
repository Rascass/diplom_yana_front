import React, { useEffect, useState } from "react";
import Requests from "../../../services/crud/index";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { validate } from "../../../services/auth";
import { Button } from "@mui/material";
import "./style.css"

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

function News() {
	const [data, setData] = useState([]);
	const [valid, setValid] = useState(false);
	const [imgId, setId] = useState(0);
	let { id } = useParams();

	useEffect(() => {
		validate({
			access_token: JSON.parse(localStorage.getItem("user")),
		}).then((res) => {
			setValid(res);
		});
		Requests.news.get(id).then((news) => {
			setData({ ...news });
		});
		setId(new RegExp(/\d\/(\w*)\/(\d*)/gm).exec(window.location.href)[2]);
	}, []);

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={1} direction='column'>
					<Grid item xs={6}>
						<Item>
							<Img
								alt='complex'
								src={`http://localhost:5001/file?location=http%3A%2F%2Flocalhost%3A3000%2Fnews%2F${imgId}`}
							/>
						</Item>
					</Grid>
					<Grid item xs={6}>
						<Item>{data.title || null}</Item>
					</Grid>
					<Grid item xs={6}>
						<Item className="content">{data.content || null}</Item>
					</Grid>
					{valid === true ? (
						<Button variant='contained' href={`${window.location.href}/change`}>
							Изменить
						</Button>
					) : null}
				</Grid>
			</Box>
		</>
	);
}

export default News;
