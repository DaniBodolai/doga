import axios from 'axios';
import {useState} from 'react'
import {useHistory } from "react";


function UjTermekek() {
  let history = useHistory();

  const [nev, setNev] = useState("");
  const [leiras, setLeiras] = useState("");
  const [ar, setAr] = useState();
  const [kep, setKep] = useState("");

  const Add = () => {
    axios.post('https://localhost:5001/api/Termekek', {
      Nev: nev,
      Leiras: leiras,
      Ar: ar,
      kep: kep,
    }).then(() => {
      history.push('/termekek');
    })

  }
  return (
    <div className="Termekek">
      <div>
        <input type="text" onChange={(event) => {
          setNev(event.target.value);
        }}></input>
      </div>
      <div>
        <input type="text" onChange={(event) => {
          setLeiras(event.target.value);
        }}></input>
      </div>
      <div>
        <input type="number" onChange={(event) => {
          setAr(event.target.value);
        }}></input>
      </div>
      <div>
        <input type="text" onChange={(event) => {
          setKep(event.target.value);
        }}></input>
      </div>
      <div>
        <button type="submit" onClick={Add}> Termék felvétele</button>
      </div>
    </div>

  )
}

export default UjTermekek;