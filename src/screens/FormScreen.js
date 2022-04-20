import React from "react";
import { useState } from "react";
import "../styles/App.css";
import ContactForm from "../components/ContactForm";
import Query from "../components/Query";
import { queriesForOnlineShop, queriesForWebPage } from "../queries";
import Axios from "axios";

function FormScreen() {
  const [type, setType] = useState(null);
  const [initialState, setInitialState] = useState({});
  const [contactFormData, setContactFormData] = useState({});
  console.log(initialState);
  const createUser = () => {
    Axios.post("http://localhost:3001/createForm", {
      object: {
        type: type === "shop" ? "Sklep internetowy" : "Strona internetowa",
        ...initialState,
        ...contactFormData,
      },
      date: new Date().toJSON(),
    }).then((response) => {
      console.log(response);
    });
  };

  const handleClickButtonConfirm = (e) => {
    const objQueries =
      type === "shop" ? queriesForOnlineShop : queriesForWebPage;
    if (Object.keys(initialState).length !== Object.keys(objQueries).length) {
      alert("Uzupełnij wszystkie pola!");
      e.preventDefault();
    } else if (Object.keys(contactFormData).length !== 9) {
      alert("Uzupełnij wszystkie formularza kontaktowego!");
      e.preventDefault();
    } else {
      createUser();
    }
  };

  const handleClick = (type) => {
    setType(type);
  };

  return (
    <div className="App">
      <button
        className="button"
        style={{ backgroundColor: type === "shop" ? "gray" : "black" }}
        onClick={() => handleClick("shop")}
      >
        Sklep internetowy
      </button>
      <button
        className="button"
        style={{ backgroundColor: type === "webpage" ? "gray" : "black" }}
        onClick={() => handleClick("webpage")}
      >
        Strona internetowa
      </button>
      {type === "webpage" && (
        <Form
          setInitialState={setInitialState}
          questions={queriesForWebPage}
          header="Strona Internetowa"
        />
      )}
      {type === "shop" && (
        <Form
          setInitialState={setInitialState}
          questions={queriesForOnlineShop}
          header="Sklep Internetowy"
        />
      )}
      <form>
        {type !== null && (
          <div>
            <ContactForm setState={setContactFormData} />
            <button
              type="submit"
              className="button bg-primary px-5 mt-5"
              onClick={handleClickButtonConfirm}
            >
              Potwierdź
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

const Form = ({ questions, setInitialState, header }) => {
  return (
    <div className="Test">
      <h1 className="text-warning text-uppercase fw-bold my-5">{header}</h1>

      {questions.map((query, i) => (
        <Query query={query} key={i} setInitialState={setInitialState} />
      ))}
    </div>
  );
};

export default FormScreen;
