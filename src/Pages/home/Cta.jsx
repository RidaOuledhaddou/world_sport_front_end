import product3Img from '../../assets/images/products/product-3.png';
import ctaImg from '../../assets/images/cta.png';
import starsImg from '../../assets/images/five-stars.png';

export default function Cta(){
    return (
    <>
           <section className="cta bg-black text-white padding-block-650">
      <div className="container">
        <div className="even-columns">
          <div className='text-info sm-t-center'>
            <h2 className="fs-800 sm-fs-650">Respect Your Body,
              It’s the Only One You Get
            </h2>
            <p className="fs-300 fw-light mb-3">It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
              point of using Lorem Ipsum is </p>
          
              <div className="card bg-white m-2 p-2 w-fit-content sm-m-auto">
              <div className="img-holder">
              <img src={product3Img} alt="" />
              </div>
              <div className="m-2">
                <h3 className="fs-300 fw-light text-black">1up Nutrition, 100% Premium
                  Whey Protein, Mélange De…</h3>
                <img src="../assets/images/five-stars.png" alt=""/>
                <div className="price flex justify-between">
                  <p className="promotion fs-300 text-gray fw-light"><s>$1.049,00</s> </p>
                  <p className="fs-300 fw-light text-red">$900,00</p>
                </div>

              </div>
            </div>
            <div className="card bg-white m-2 p-2 w-fit-content sm-m-auto">
              <div className="img-holder">
              <img src={product3Img} alt="" />
              </div>
              <div className="m-2">
                <h3 className="fs-300 fw-light text-black">1up Nutrition, 100% Premium
                  Whey Protein, Mélange De…</h3>
                  <img src={starsImg} alt="" />
                   
                <div className="price flex justify-between">
                  <p className="promotion fs-300 text-gray fw-light"><s>$1.049,00</s> </p>
                  <p className="fs-300 fw-light text-red">$900,00</p>
                </div>

              </div>
            </div>

          </div>
          <div>
            <div className="img-holder">
              <img src={ctaImg} alt="" />

            </div>
          </div>
        </div>
      </div>
    </section>

    </>
    )
}