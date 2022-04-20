import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminPanel() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const [logged, setLogged] = useState(false);
  return (
    <div>
      {logged ? (
        <Panel />
      ) : (
        <LogIn
          setLogged={setLogged}
          login={login}
          password={password}
          setPassword={setPassword}
          setLogin={setLogin}
        />
      )}
    </div>
  );
}

const LogIn = ({ setLogged, login, setLogin, setPassword, password }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === "Admin" && password === "Admin") {
      setLogged(true);
    }
  };

  const handleChange = (e) => {
    if (e.target.type === "password") {
      setPassword(e.target.value);
    } else {
      setLogin(e.target.value);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container-fluid p-5 d-flex justify-content-around flex-column align-items-center"
    >
      <h1 className="py-4">Panel administracyjny</h1>
      <label>
        Login
        <input type="text" onChange={handleChange} value={login} />
      </label>

      <label className="my-2">
        Hasło
        <input type="password" onChange={handleChange} value={password} />
      </label>

      <button type="submit" className="button px-4">
        Zaloguj się
      </button>
    </form>
  );
};

const Panel = () => {
  const navigate = useNavigate();
  const [forms, setForms] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/getForms").then((response) => {
      setForms(response.data);
    });
  }, []);

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <h1>Panel</h1>
      <table class="table table-hover ">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Rodzaj briefu</th>
            <th scope="col">Nazwa</th>
            <th scope="col">Data złożenia</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((item) => {
            const date = new Date(item.date);
            return (
              <tr
                onClick={() => {
                  navigate(`/panel/${item._id}`);
                }}
              >
                <th scope="row">{item._id}</th>
                <td>
                  {item.object.type === "shop"
                    ? "Sklep internetowy"
                    : "Strona internetowa"}
                </td>
                <td>{item.object["Imię i nazwisko"]}</td>
                <td>
                  {date.toLocaleDateString()} {date.toLocaleTimeString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
