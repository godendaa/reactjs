import axios from "axios";

const instance = axios.create({
	baseURL: "https://react-buildaburger.firebaseio.com/"
});

export default instance;
