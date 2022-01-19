export function createPostRequest(URL) {
	return (values) => {
		return fetch(URL, {
			method: "POST",
			body: JSON.stringify(values),
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				Authorization:
					"Bearer " + (JSON.parse(localStorage.getItem("user")) || ""),
			},
		});
	};
}
