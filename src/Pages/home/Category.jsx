import React from 'react';
import topSellerImg from '../../assets/images/right-arrow-icon.svg';
import starsImg from '../../assets/images/five-stars.png';
import { Link } from 'react-router-dom';
import Card from '../products/Card';

export default function Category({ title, category, products }) {
    return (
        <>
            <section className="category padding-block-650">
                <div className="container">
                    <div className="flex justify-between">
                        <h2 className="secondary-heading fs-700 sm-fs-650">{title}</h2>
                        <div className=''>
                            <Link to={`/products/${category}`}>
                                <div className='flex items-center'>
                                    See All &ensp; <span><img src={topSellerImg} alt="" /></span>
                                </div>

                            </Link> </div>
                    </div>
                    <div className="even-columns justify-center mt-2">
                        {
                            products.map((p) => {
                                return (
                                   <Card key={p.id} product={p}/>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
