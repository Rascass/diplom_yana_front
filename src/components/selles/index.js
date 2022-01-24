import {
	Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SearchBar from "material-ui-search-bar";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { validate } from "../../services/auth";
import Requests from "../../services/crud/index";

const columns = [
	{ field: "title", headerName: "Заголовок", width: 150 },
	{ field: "content", headerName: "Описание", width: 150 },
	{ field: "sex", headerName: "Пол", width: 150 },
	{ field: "age", headerName: "Возраст", width: 150 },
	{ field: "price", headerName: "Цена", width: 150 },
];


export default function BasicTable() {
	const [originalRows, setOriginal] = useState([]);
	const [rows, setRows] = useState([]);
	const [searched, setSearched] = useState("");
	const [valid, setValid] = useState(false);

	let history = useHistory();

	const requestSearch = (searchedVal) => {
		const filteredRows = originalRows.filter((row) => {
			return (
				row.title.toLowerCase().includes(searchedVal.toLowerCase()) ||
				row.content.toLowerCase().includes(searchedVal.toLowerCase()) ||
				row.age.toString().toLowerCase().includes(searchedVal.toLowerCase()) ||
				row.sex.toLowerCase().includes(searchedVal.toLowerCase()) ||
				row.price.toString().toLowerCase().includes(searchedVal.toLowerCase()) 
			);
		});
		setRows(filteredRows);
	};

	useEffect(() => {
		validate({
			access_token: JSON.parse(localStorage.getItem("user")),
		}).then((res) => {
			setValid(res);
		});
		Requests.sell.getAll().then((selles) => {
			if (selles.statusCode === 400) {
				return setRows([]);
			}
			setRows([...selles]);
			setOriginal([...selles]);
		});
	}, []);

	const createSell = () => {
		history.push(`/sell/create`);
	};

	const cancelSearch = () => {
		setSearched("");
		requestSearch(searched);
	};

	return (
		<>
			{valid === true ? (
				<Button variant='contained' onClick={createSell}>
					Создать
				</Button>
			) : null}
			<SearchBar
				style={{
					marginRight: "auto",
					marginLeft: "auto",
					width: "60%",
				}}
				value={searched}
				onChange={(searchVal) => requestSearch(searchVal)}
				onCancelSearch={() => cancelSearch()}
			/>
			<div
				style={{
					height: 600,
					width: "60%",
					display: "block",
					marginRight: "auto",
					marginLeft: "auto",
				}}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
					onRowClick={(e) => {
						history.push("sell/" + e.row.id);
					}}
				/>
			</div>
		</>
	);
}
