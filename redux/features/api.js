import axios from "axios";
import { Sign_In, Sign_Up } from "../../http-requests/api";
import { loginStart, loginFail, loginSuccess } from "./login";

export const LoginUser = async (value, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(Sign_In, value, { withCredentials: true });
    dispatch(loginSuccess(res.data.data));
  } catch (err) {
    dispatch(loginFail(err));
  }
};

export const RegisterUser = "";
