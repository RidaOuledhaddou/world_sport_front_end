import { Link } from 'react-router-dom';
import product3Img from '../../assets/images/products/product-3.png';
import product2Img from '../../assets/images/products/product-2.png';
import product4Img from '../../assets/images/products/product-4.png';
import product1Img from '../../assets/images/products/product-1.png';
import starsImg from '../../assets/images/five-stars.png';
export default function Deals() {
    return (
        <>
            <section className="deals padding-block-650">
                <div className="container">
                    <div className="even-columns">
                        <div className="text-white sm-m-auto sm-t-center">
                            <h2 className="fs-700 ">DEALS DE LA SEMAIN <br /> <span className="text-primary"> 15% DE REMISE</span></h2>
                            <p className="fs-500 fw-regular">PREMIER ARRIVE, PREMIER SERVI ! </p>
                            <div className="timer w-fit-content flex sm-m-auto">
                                <div className="m-1">
                                    <div className="fs-400 box bg-primary p-1 t-center fw-light">
                                        00
                                    </div>
                                    <span className="fs-300 fw-light">Days</span>
                                </div>
                                <div className="m-1">
                                    <div className="fs-400 box bg-primary p-1 t-center fw-light">
                                        00
                                    </div>
                                    <span className="fs-300 fw-light">Hours</span>
                                </div>
                                <div className="m-1">
                                    <div className="fs-400 box bg-primary p-1 t-center fw-light">
                                        00
                                    </div>
                                    <span className="fs-300 fw-light">Mins</span>
                                </div>
                                <div className="m-1">
                                    <div className="fs-400 box bg-primary p-1 t-center fw-light">
                                        00
                                    </div>
                                    <span className="fs-300 fw-light">Secs</span>
                                </div>
                            </div>
                            <button className="btn mt-2"><Link to="/products"> CONSULTEZ NOS PROMOTIONS</Link></button>
                        </div>
                        <div className="cards-holder">
                            <div className="card bg-white m-2 p-2 w-fit-content m-auto">
                                <div className="img-holder">
                                    <img src={product3Img} alt="" />
                                </div>
                                <div className="m-2">
                                    <h3 className="fs-300 fw-light">1up Nutrition, 100% Premium
                                        Whey Protein, Mélange De…</h3>
                                    <img src={starsImg} alt="" />
                                    
                                    <div className="price flex justify-between">
                                        <p className="promotion fs-300 text-gray fw-light"><s>$1.049,00</s></p>
                                        <p className="fs-300 fw-light text-red">$900,00</p>
                                    </div>

                                </div>
                            </div>
                            <div className="card bg-white m-2 p-2 w-fit-content m-auto">
                                <div className="img-holder">
                                    <img src={product2Img} alt="" />
                                </div>
                                <div className="m-2">
                                    <h3 className="fs-300 fw-light">1up Nutrition, 100% Premium
                                        Whey Protein, Mélange De…</h3>
                                    <img src={starsImg} alt="" />
                                    <div className="price flex justify-between">
                                        <p className="promotion fs-300 text-gray fw-light"><s>$1.049,00</s></p>
                                        <p className="fs-300 fw-light text-red">$900,00</p>
                                    </div>

                                </div>
                            </div>
                            <div className="card bg-white m-2 p-2 w-fit-content m-auto">
                                <div className="img-holder">
                                    <img src={product4Img} alt="" />
                                </div>
                                <div className="m-2">
                                    <h3 className="fs-300 fw-light">1up Nutrition, 100% Premium
                                        Whey Protein, Mélange De…</h3>
                                    <img src={starsImg} alt="" />
                                    <div className="price flex justify-between">
                                        <p className="promotion fs-300 text-gray fw-light"><s>$1.049,00</s></p>
                                        <p className="fs-300 fw-light text-red">$900,00</p>
                                    </div>

                                </div>
                            </div>
                            <div className="card bg-white m-2 p-2 w-fit-content m-auto">
                                <div className="img-holder">
                                    <img src={product1Img} alt="" />
                                </div>
                                <div className="m-2">
                                    <h3 className="fs-300 fw-light">1up Nutrition, 100% Premium
                                        Whey Protein, Mélange De…</h3>
                                    <img src={starsImg} alt="" />
                                    <div className="price flex justify-between">
                                        <p className="promotion fs-300 text-gray fw-light"><s>$1.049,00</s></p>
                                        <p className="fs-300 fw-light text-red">$900,00</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}