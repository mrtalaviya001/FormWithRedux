import React from "react";
import "../css/form.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  get,
  selectForm,
  selectProduct,
  EditIdex,
  edit,
  updatevalue,
  upate,
} from "../store/reducers/formReducer";
import { useDispatch, useSelector } from "react-redux";
export default function Form() {
  const [Id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [File, setFile] = useState("");


  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    setFile(base64);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror =(error) => {
        reject(error);
      };
    });
  };

  const [DropValue, setDropValue] = useState("");
  const [person, setperson] = useState([]);
  const dispatch = useDispatch();
  const userDetails = useSelector(upate);
  const editBtnForm = useSelector(EditIdex);
  const userAmount = useSelector((state) => state.products.value.length);


  const submit = () => {
    if (editBtnForm != 0) {
      dispatch(
        updatevalue({
          id: editBtnForm,
          Id,
          Name,
          Price,
          File,
          DropValue,
        })
      );
      if (editBtnForm != 0) {
        dispatch(edit(0));
      }
    } else {
      dispatch(
        get({
          id: userAmount + 1,
          Id,
          Name,
          Price,
          File,
          DropValue,
        })
      );
      setName("");
      setPrice("");
      setFile("");
      setDropValue("");
      setId("");
    }
  };
  return (
    <>
      <div className="container body">
        <div className="login-box">
          <h2>FORM</h2>
          <form>
            <div className="user-box">
              <input
                type="text"
                name=""
                value={Id}
                required=""
                onChange={(e) => setId(e.target.value)}
              />
              <label>ID</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name=""
                value={Name}
                required=""
                onChange={(e) => setName(e.target.value)}
              />
              <label>Name</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name=""
                value={Price}
                required=""
                onChange={(e) => setPrice(e.target.value)}
              />
              <label>Price</label>
            </div>
            <div className="user-box">
              <input
                type="file"
                name=""
                required=""
                className="form-control"
                onChange={(e) => {uploadImage(e)}}
              />
            </div>
            <select
              class="form-select bg-dark text-success"
              aria-label="Default select example"
              value={DropValue}
              onChange={(e) => setDropValue(e.target.value)}
            >
              <option selected>select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            
            <img src={File} alt="" height="100"  />

            <Link to="table" onClick={submit}>
              <span />
              <span />
              <span />
              <span />
              submit
            </Link>

            <Link to="table">
              <span />
              <span />
              <span />
              <span />
              Table
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
