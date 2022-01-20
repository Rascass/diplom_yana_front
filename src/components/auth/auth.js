import React, { useEffect, useState } from "react";
import getToken from "../../services/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { validate } from "../../services/auth";
import Login from "./login";
import Orders from "./orders/orders";

export default function Auth() {
	const [valid, setValid] = useState(false);

	let history = useHistory();

	useEffect(() => {
		validate({
			access_token: JSON.parse(localStorage.getItem("user")),
		}).then((res) => {
			setValid(res);
		});
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		getToken({
			login: data.get("login"),
			pass: data.get("password"),
		}).then((res) => {
			if (res === true) {
				history.push("/");
			} else {
				alert("Неправильный пароль");
			}
		});
	};

	return (
		<>{valid === true ? <Orders /> : <Login handleSubmit={handleSubmit} />}</>
	);
}
