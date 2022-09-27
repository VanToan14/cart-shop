import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import '../public/css/home.css'
import ListProduct from "../components/product/ListProduct";
import { DataProduct } from "../data/DataProduct";
function Home (props){
    const {onAdd}=props;
    
    return(
        <div>
           <Carousel variant="dark">
                <Carousel.Item>
                    <div className="img_slider img_slider_1 img_slider_2">
                        <img
                        className="d-block w-100"
                        src={require('../public/img/sl2.jpg')}
                        alt="First slide"
                        />
                    </div>
                    {/* <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img_slider img_slider_1 img_slider_2">
                        <img
                        className="d-block w-100"
                        src={require('../public/img/sl1.jpg')}
                        alt="Second slide"
                        />
                    </div>
                    {/* <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img_slider img_slider_1 img_slider_2">
                        <img
                        className="d-block w-100"
                        src={require('../public/img/sl3.jpg')}
                        alt="Third slide"
                        />
                    </div>
                    {/* <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
            <div className="container" >
                <h1 style={{paddingTop:'10px', borderBottom:'2px solid red'}}>PRODUCTS LIST</h1>
            <div className="container">
                <div className="row">
                        {DataProduct.map(product=>(
                            <ListProduct
                                key={product.id}
                                product={product}
                                onAdd={onAdd}
                            />
                        ))}
                </div>
            </div>
            </div>
        </div>
    )
}
export default Home