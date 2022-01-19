export function createDeleteRequest(URL) {
	return (id) => {
		return fetch(URL + `/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				Authorization:
					"Bearer " + (JSON.parse(localStorage.getItem("user")) || ""),
			},
		}).then((res) => res.json());
	};
}
