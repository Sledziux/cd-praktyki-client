import Axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function BriefPreview() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [noteForDev, setNoteForDev] = useState('');
  useEffect(() => {
    Axios.get(`http://localhost:3001/getForms/${params.id}`).then((response) => {
      setData(response.data[0].object);
      if (response.data[0].note) {
        setNoteForDev(response.data[0].note);
      }
    });
  }, [params]);

  const handleUpdateNote = () => {
    console.log({ ...data, note: 'Notatka dla mądrej osoby' });
    Axios.post(`http://localhost:3001/updateForm/${params.id}`, {
      note: noteForDev,
    });
  };

  const onTextareaChange = (e) => {
    setNoteForDev(e.target.value);
  };

  console.log(data);

  if (data === null) {
    return <p>Ładowanie</p>;
  }
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="row">
        <h1 className="my-5 ">
          {data['Imię i nazwisko']} -{' '}
          {data.type === 'shop' ? 'Sklep internetowy' : 'Strona internetowa'}
        </h1>
      </div>
      <img src={require('./icon.png')} alt="PDF Icon" className="pdf-icon" />

      <table className="table w-50">
        <tbody>
          {Object.keys(data).map((key) => {
            if (key === 'type') {
              return null;
            }
            return (
              <tr>
                <td>{key}</td>
                <td>{data[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <textarea
        onChange={onTextareaChange}
        placeholder="Notka dla mnie"
        className="w-50 my-2 p-2"
        value={noteForDev}
      />
      <button onClick={handleUpdateNote} className="button mb-5">
        Zapisz notkę
      </button>
    </div>
  );
}
