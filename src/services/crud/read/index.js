export function createGetAllRequest(URL) {
	return () => {
		return fetch(URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				Authorization:
					"Bearer " + (JSON.parse(localStorage.getItem("user")) || ""),
			},
		}).then((res) => res.json());
	};
}

export function createGetRequest(URL) {
	return (id) => {
		return fetch(URL + `/${id}`, {
			method: "GET",
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
