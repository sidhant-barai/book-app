import { useNavigate } from "react-router-dom";
import { validEmail, validName, validPassword } from "../regex";
import { useState } from "react";

function Details() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailErr, setEmailErr] = useState(false);
   const [pwdError, setPwdError] = useState(false);

   const validate = () => {
    if (validEmail.test(email)) {
       setEmailErr(true);
    } else {
      alert('Email written is not valid. Please reload the page to fill again')
    }
    if (validPassword.test(password)) {
       setPwdError(true);
    } else {
      alert('Pasword written is not valid. Please reload the page to fill again.')
    }
 };

  return (
    <div>
      <div className="container my-5 py-2">
        <form className="pb-3">
          <div className="mb-3">
            <label for="firstName" class="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="firstName" />
          </div>
          <div className="mb-3">
            <label for="lastName" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="lastName" />
          </div>
          <div className="mb-3">
            <label for="userName" className="form-label">
              User Name
            </label>
            <input type="text" className="form-control" id="userName"/>
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email{" "}
              <span className="fw-light text-black-50">
                (Eg: abc@gmail.com)
              </span>
            </label>
            <input type="text" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="my-4">
            <label for="Password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="Password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="mb-3 row">
            <div className="col-10">
              <label for="number" className="form-label">
                Number
              </label>
              <input type="text" className="form-control" id="number" />
            </div>
            <div className="col mt-4 pt-2">
              <div className="input-group mb-3">
                <label className="input-group-text" for="inputGroupSelect01">
                  Sex
                </label>
                <select className="form-select" id="inputGroupSelect01">
                  <option selected>...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="None">None of the Above</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onClick={validate}
            />
            <label className="form-check-label" for="flexCheckDefault">
              I agree to the{" "}
              <span className="text-primary fw-bold">
                Terms and Conditions{" "}
              </span>{" "}
              mentioned as by the website
            </label>
          </div>
          {emailErr && pwdError && <div className="text-center">
            <button
              type="submit"
              className="btn btn-dark mt-5 fs-2"
              onClick={() => navigate("/")}
            >
              Submit
            </button>
          </div>
          }
          
        </form>
      </div>
    </div>
  );
}

export default Details;
