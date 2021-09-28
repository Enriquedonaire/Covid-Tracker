import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

const Countries = ({countryForm}) => {
    const [countriesList, setCountriesList] = useState([]);

    useEffect(() => {
        const loadCountries = async () => {
            setCountriesList(await loadListCountries());
        }

        loadCountries();

    }, [])

    const loadListCountries = async () => {
        try {
            const dataCountry = await axios.get('https://covid19.mathdro.id/api/countries');
            const list = dataCountry.data.countries.map((country) => country.name);
            return list;
        } catch (err) {
            console.log(err);

        }
    }

    return (
        <div>
            <Form.Group>
                <Form.Label>Choose a Country
                </Form.Label>
                <Form.Control as="select" onChange={(e) => countryForm(e.target.value)} >
                    <option value="World">World</option>
                    {countriesList.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </Form.Control>
            </Form.Group>
        </div>
    )
}

export default Countries;
