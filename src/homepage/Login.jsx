import { useNavigate } from "react-router-dom";
import { login } from "../datas/login";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loggedUser} from '../redux/actions'

function Login() {
  const dispatch = useDispatch();


  const [userName, setUserName] = useState("");
  const [userChk, setUserChk] = useState(false);
  //const [passwordChk, setPasswordChk] = useState(false);
  const [btn, setBtn] = useState(false);

  const usernameCheck = (event) => {
    const value = event.target.value;
    if (login.some((e) => e.username === value)) {
      setUserChk(true);
      setUserName(value);
    } else {
      setUserChk(false);
    }
  };

  const passwordCheck = (event) => {
    const value = event.target.value;
    if (login.some((e) => e.password === value)) {
      if (userChk) {
        setBtn(true);
      } else {
        setBtn(false);
      }
    } else {
      setBtn(false);
    }
  };
  const navigate = useNavigate();

  const submit = () => {
    navigate("/user/dashboard");
    dispatch(loggedUser(userName));
    //console.log(userName);
  };


  return (
    <div>
      <div className="container my-5 py-5">
        <form className="pb-3">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              onChange={usernameCheck}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="Password"
              onKeyUp={passwordCheck}
            />
          </div>

          <div className="mb-5 py-3 fs-4 text-center text-dark bg-dark bg-opacity-25">
            Don't have an account? Click on Register to make one!
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-dark fs-2"
              onClick={submit}
              disabled={!btn}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
