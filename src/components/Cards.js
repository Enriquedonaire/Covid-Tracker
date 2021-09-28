import React from 'react'
import CountUp from 'react-countup';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';




const Cards = ({ data }) => {

    if(!data.data) {
        return "...Loading";
    } else {
        return (
            <div  className="card card-body bg-secondary text-dark">
                <Row>
                    <Card>
                        <Card.Body>
                            <Card.Title>Infected</Card.Title>
                            <Card.Text>
                                <CountUp
                                    start={0}
                                    end={data.data.confirmed.value}
                                    duration={3}
                                    separator="."
                                />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Deaths</Card.Title>
                            <Card.Text>
                                <CountUp
                                    start={0}
                                    end={data.data.deaths.value}
                                    duration={3}
                                    separator="."
                                />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Recovered</Card.Title>
                            <Card.Text>
                                <CountUp
                                    start={0}
                                    end={data.data.recovered.value}
                                    duration={3}
                                    separator="."
                                />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        )

    }

}





export default Cards;
