import axios from "axios";

const _apiBase = 'https://jsonplaceholder.typicode.com/';

class FortressServices {

	static async getAllNews(page = 1) {
		const response = await axios.get(`${_apiBase}posts?_limit=6&_page=${page}`);
		return response;
	}
}

export default FortressServices;