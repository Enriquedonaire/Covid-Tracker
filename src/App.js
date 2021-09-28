import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Countries from './components/Countries';
import Cards from './components/Cards';
import Graphic from './components/Graphic';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootswatch/dist/morph/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const App = () => {
    const [country, setCountry] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const apiData = await fetchData(country);
            setData(apiData);

        }

        loadData();

    }, [country])

    console.log(data)

    const countryForm = async (country) => {
        setCountry(country);

    }

    const fetchData = async (country) => {
        let url = "";

        if (country === "" || country === "World") {
            url = "https://covid19.mathdro.id/api";

        } else {
            url = `http://covid19.mathdro.id/api/countries/${country}`;
        }

        try {
            const data = await axios.get(url);
            return data;

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="body">
            <NavBar />
            <Container fluid >
                <Row>
                    <Col xl={3} >
                        <Countries countryForm={countryForm} />
                    </Col>

                    <Col xl={5} >
                        <Graphic country={country} data={data} />
                    </Col>

                    <Col xl={2} >
                        <Cards data={data} />
                    </Col>
                </Row>
            </Container>
            <footer className="bg-dark text-light text-center">
                <div className="container p-5">
                    <h1>&copy; Enrique Donaire | Covid19-Tracker</h1>
                    <p>2000 - {new Date().getFullYear()}</p>
                    <p>All rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default App;
