
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { useState, useEffect } from 'react';


export const Stat = (props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const [cours, setCours] = useState({});
    const [data, setData] = useState({})

    const getData = async () => {

        await fetch("https://trano-vacance.mg/kitapo/data?email=" + props.email)
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
    }

    const getPrices = async () => {
        let res, res1
        await fetch('https://api.binance.com/api/v1/ticker/price?symbol=BTCUSDT')
            .then(response => response.json())
            .then(data => {
                res = parseFloat(data["price"]).toFixed(2)

            })
        await fetch('https://api.binance.com/api/v1/ticker/price?symbol=ETHUSDT')
            .then(response => response.json())
            .then(data => {
                res1 = parseFloat(data["price"]).toFixed(2)

            })

        setCours({
            ETH: res1,
            USDT: 4300,
            BTC: res,
        })
    }
    // Use effect to fetch the current prices
    useEffect(() => {
        getPrices()
        getData()
    }, []);


    return (

        <div className="row">
            <div className="col-12">
                <div className="wow zoomIn">
                    <p>Ny taremarika avy ao amin'ny kaontinao ity.<br></br></p>
                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            {/* <img src={meter1} alt="boby napedina"/> */}
                            {/* <DoughNut /> */}
                            <svg width="200" height="200">
                                <circle cx="100" cy="100" r="60" strokeWidth="20" strokeDasharray="330" stroke="url(#gradient)" fill="transparent" />
                                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0" stop-color="#800080" />
                                    <stop offset="1" stop-color="#00F" />
                                </linearGradient>
                                <g className="donut-text donut-text-1">
                                    <text y="50%" transform="translate(0, 2)">
                                        <tspan x="50%" textAnchor="middle" className="donut-percent">{data['total_achat'] - data['total_retrait']}</tspan>
                                    </text>
                                    <text y="60%" transform="translate(0, 2)">
                                        <tspan x="50%" textAnchor="middle" className="donut-data">Ar</tspan>
                                    </text>
                                </g>
                            </svg>
                            <h5>Vola nampiasaina</h5>
                        </div>

                        <div className="item">
                            {/* <DoughNut3 /> */}
                            {/* <img src={meter2} /> */}
                            <svg width="200" height="200">
                                <circle cx="100" cy="100" r="60" strokeWidth="20" strokeDasharray="330" stroke="url(#gradient)" fill="transparent" />
                                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0" stop-color="#800080" />
                                    <stop offset="1" stop-color="#00F" />

                                </linearGradient>
                                <g className="donut-text donut-text-1">
                                    <text y="50%" transform="translate(0, 2)">
                                        <tspan x="50%" textAnchor="middle" className="donut-percent">
                                            {
                                                (data['BTC'] * cours['BTC'] * cours['USDT'] + data['ETH'] * cours['ETH'] * cours['USDT'] + data['USDT'] * cours['USDT']).toFixed(0)
                                            }

                                        </tspan>
                                    </text>
                                    <text y="60%" transform="translate(0, 2)">
                                        <tspan x="50%" textAnchor="middle" className="donut-data">Ar</tspan>
                                    </text>
                                </g>
                            </svg>
                            <h5>Sandany anio</h5>
                        </div>
                        <div className="item">
                            {/* <img src={meter2} /> */}
                            {/* <DoughNut2 /> */}
                            <svg width="200" height="200">
                                <circle cx="100" cy="100" r="60" strokeWidth="20" strokeDasharray="330" stroke="url(#gradient)" fill="transparent" />
                                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0" stop-color="#800080" />
                                    <stop offset="1" stop-color="#00F" />
                                </linearGradient>
                                <g className="donut-text donut-text-1">
                                    <text y="50%" transform="translate(0, 2)">
                                        <tspan x="50%" textAnchor="middle" className="donut-percent">
                                            {

                                                ((-(data['total_achat'] - data['total_retrait']) + (data['BTC'] * cours['BTC'] * cours['USDT'] + data['ETH'] * cours['ETH'] * cours['USDT'] + data['USDT'] * cours['USDT'])) / (data['total_achat'] - data['total_retrait']) * 100).toFixed(2)

                                            }
                                        </tspan>
                                    </text>
                                    <text y="60%" transform="translate(0, 2)">
                                        <tspan x="50%" textAnchor="middle" className="donut-data">%</tspan>
                                    </text>
                                </g>
                            </svg>
                            <h5>ROI </h5>
                        </div>
                        <div className="item" alt="ordre nalefan robot">
                            <svg width="200" height="200">
                                <circle cx="100" cy="100" r="60" strokeWidth="20" strokeDasharray="330" stroke="url(#gradient)" fill="transparent" />
                                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0" stop-color="#800080" />
                                    <stop offset="1" stop-color="#00F" />
                                </linearGradient>
                                <g className="donut-text donut-text-1">
                                    <text y="50%" transform="translate(0, 2)">
                                        <tspan x="50%" textAnchor="middle" className="donut-percent">
                                            {
                                                data['total_buy'] + data['total_sell']
                                            }
                                        </tspan>
                                    </text>
                                    {/* <text y="60%" transform="translate(0, 2)">
                        <tspan x="50%" textAnchor="middle" className="donut-data"></tspan>
                      </text> */}
                                </g>
                            </svg>
                            <h5>Bot orders </h5>
                        </div>
                        <div className="item" alt="fitsinjarana">
                            <svg width="200" height="200">
                                <circle cx="50" cy="50"
                                    r={data['BTC'] * cours['BTC'] * cours['USDT'] * 50 / (data['BTC'] * cours['BTC'] * cours['USDT'] + data['ETH'] * cours['ETH'] * cours['USDT'] + data['USDT'] * cours['USDT'])}
                                    fill="#800080" />
                                <text x="50" y="50" textAnchor="middle" dominantBaseline="central" fontSize="0.7em" fill="#00FFFF">{data['BTC']} BTC</text>
                                <circle cx="150" cy="50"
                                    r={(data['ETH'] * cours['ETH'] * cours['USDT'] * 50 / (data['BTC'] * cours['BTC'] * cours['USDT'] + data['ETH'] * cours['ETH'] * cours['USDT'] + data['USDT'] * cours['USDT'])).toString()}

                                    fill="url(#gradient)" />
                                <text x="150" y="50" textAnchor="middle" dominantBaseline="central" fontSize="0.7em" fill="#00FFFF">{data['ETH']} ETH</text>
                                <circle cx="100" cy="150" r={data['USDT'] * cours['USDT'] * 50 / (data['BTC'] * cours['BTC'] * cours['USDT'] + data['ETH'] * cours['ETH'] * cours['USDT'] + data['USDT'] * cours['USDT'])}

                                    fill="#00F" />
                                <text x="100" y="150" textAnchor="middle" dominantBaseline="central" fontSize="0.7em" fill="#00FFFF">{data['USDT']} USDT</text>
                            </svg>
                            <h5>BTC / ETH / USDT</h5>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>




    )
}

