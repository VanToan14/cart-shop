import React from 'react'
import { useParams } from 'react-router-dom';
import {DataProduct} from '../../data/DataProduct'
import "../../public/css/listproduct.css"
import { Card } from 'react-bootstrap';
const Detailproduct= ()=>{
//    const { productPath } = useParams<{ productPath: string }>('');
//    const params = useParams<{ productPath:String}>([]);
//    const product=DataProduct.find((product)=>product.path.toString()===params.productPath)
//    console.log(params.productPath);

const { id } = useParams();
const singleProduct = DataProduct.find(product => String(product.id) === id)
    return(
        <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5" >
                    <div className="img_product ">
                        <Card.Img src={`../${singleProduct.image}`} className="img_p" alt=""/>
                    </div>
                    </div>
                    <div className="col-lg-7" >
                        <h1>{singleProduct.title}</h1>
                        <h1>Giá: {singleProduct.price} đ</h1>
                        <p><input type="number" id="ageToCheck" value="1" onChange={e=>e.target.value}/></p>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}
export default Detailproduct