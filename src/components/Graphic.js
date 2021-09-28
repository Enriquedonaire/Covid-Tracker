import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line, Doughnut } from 'react-chartjs-2';


const Graphic = ({ data, country }) => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const loadData = async () => {
            const data = await loadDailyData();
            setDailyData(data);
        }

        loadData();
    })


    const loadDailyData = async () => {
        try {
            const data = await axios.get("https://covid19.mathdro.id/api/daily");
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    let chart;

    if (dailyData.data && (country === "World" || country === "")) {
        chart = (
            <Line
                data={{
                    labels: dailyData.data.map(e => e.reportDate),
                    datasets: [{
                        data: dailyData.data.map(e => e.confirmed.total),
                        label: 'Confirmed',
                        borderColor: "red",
                        fill: true
                    }, {
                        data: dailyData.data.map(e => e.deaths.total),
                        label: 'Deaths',
                        borderColor: 'black',
                        fill: true,
                    }]
                }}

                options={{
                    legend: {
                        labels: {
                            fontColor: "black",
                            fontSize: 18
                        }
                    },
                    title: {
                        display: true,
                        text: 'Coronavirus in the World',
                        fontColor: 'black'
                    }
                }}
            />

        )
    } else if (data.data) {
        chart = (
            <Doughnut
                data={{
                    labels: ['Confirmed', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgb(255, 205, 86)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 99, 132)'
                        ],

                        data: [data.data.confirmed.value, data.data.recovered.value, data.data.deaths.value]
                    }]

                }}

                options={{
                    cutoutPercentage: 80,
                    animation: {
                        animateScale: true
                    },
                    legend: {
                        display: true,
                        fontColor: 'white'
                    },
                    title: {
                        display: true,
                        text: `Coronavirus in ${country}`,
                        fontColor: 'black'
                    },

                }}

            />
        )
    }


    if (!data.data) {
        return "Loading..."
    } else {
        return (
            <div>
                {chart}
            </div>
        )
    }


}


export default Graphic;