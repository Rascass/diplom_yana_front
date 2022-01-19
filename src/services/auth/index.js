import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

export default function login(data) {
	return axios
		.post(API_URL + "login", data)
		.then((response) => {
			localStorage.setItem("user", JSON.stringify(response.data.access_token));
			return true;
		})
		.catch((err) => {
			localStorage.setItem("user", JSON.stringify(""));
			return false;
		});
}

export function validate(data) {
	return axios.post(API_URL + "validate", data).then((response) => {
		return !!response.data;
	});
}
