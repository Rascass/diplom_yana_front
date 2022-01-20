import { createPostRequest } from "./create";
import { createDeleteRequest } from "./delete";
import { createGetAllRequest, createGetRequest } from "./read";
import { createPutRequest } from "./update";
import { BACKEND_HOST } from "./constants";

const requests = () => ({
	news: {
		create: createPostRequest(BACKEND_HOST + "news/create"),
		getAll: createGetAllRequest(BACKEND_HOST + "news"),
		get: createGetRequest(BACKEND_HOST + "news"),
		update: createPutRequest(BACKEND_HOST + "news"),
		delete: createDeleteRequest(BACKEND_HOST + "news"),
	},
	price: {
		create: createPostRequest(),
		getAll: createGetAllRequest(BACKEND_HOST + "prices"),
		get: createGetRequest(BACKEND_HOST + "prices"),
		update: createPutRequest(BACKEND_HOST + "prices"),
		delete: createDeleteRequest(),
	},
	contacts: {
		create: createPostRequest(),
		getAll: createGetAllRequest(BACKEND_HOST + "contacts"),
		get: createGetRequest(BACKEND_HOST + "contacts"),
		update: createPutRequest(BACKEND_HOST + "contacts"),
		delete: createDeleteRequest(),
	},
	hire: {
		create: createPostRequest(BACKEND_HOST + "hires/create"),
		getAll: createGetAllRequest(BACKEND_HOST + "hires"),
		get: createGetRequest(BACKEND_HOST + "hires"),
		update: createPutRequest(BACKEND_HOST + "hires"),
		delete: createDeleteRequest(BACKEND_HOST + "hires"),
	},
	idle: {
		create: createPostRequest(BACKEND_HOST + "idles/create"),
		getAll: createGetAllRequest(BACKEND_HOST + "idles"),
		get: createGetRequest(BACKEND_HOST + "idles"),
		update: createPutRequest(BACKEND_HOST + "idles"),
		delete: createDeleteRequest(BACKEND_HOST + "idles"),
	},
	sell: {
		create: createPostRequest(BACKEND_HOST + "selles/create"),
		getAll: createGetAllRequest(BACKEND_HOST + "selles"),
		get: createGetRequest(BACKEND_HOST + "selles"),
		update: createPutRequest(BACKEND_HOST + "selles"),
		delete: createDeleteRequest(BACKEND_HOST + "selles"),
	},
	orders: {
		update: createPutRequest(BACKEND_HOST + "orders"),
		getAll: createGetAllRequest(BACKEND_HOST + "orders"),
		create: createPostRequest(BACKEND_HOST + "orders/create"),
		getAllFeedback: createGetAllRequest(BACKEND_HOST + "orders/feedback"),
	},
});

export default requests();
