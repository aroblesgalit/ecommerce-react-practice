import axios from "axios";
import Cookie from "js-cookie";
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL } from "../constants/userConstants";

const signin = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
        const { data } = await axios.post("/api/users/signin", { email, password });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        Cookie.set("userinfo", JSON.stringify(data));
    } catch (err) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: err.message });
    }
}

export { signin };