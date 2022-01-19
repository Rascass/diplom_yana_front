export function createPutRequest(URL) {
	return (newsId, values) => {
		return fetch(URL + `/${newsId}`, {
			method: "PATCH",
			body: JSON.stringify(values),
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				Authorization:
					"Bearer " + (JSON.parse(localStorage.getItem("user")) || ""),
			},
		}).then((res) => {
			return res.json();
		});
	};
}

