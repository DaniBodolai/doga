import axios from 'axios';
import { useState, useEffect } from "react";
import { Card } from 'react-bootstrap'






function Termekek() {
    const [termeks, setTermeks] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:5001/api/Termekek').then((response) => {
            setTermeks(response.data);
        })
    }, []);

    return (
        <div>
            {termeks.map((value, key) => {
                return (
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Header>{value.Nev}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <p> {value.id}</p>
                                <p> {value.Leiras}</p>
                                <p> {value.Ar} Forintos</p>
                                <p>  {value.kep}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                )
            })}
        </div>

    );
}

export default Termekek;

