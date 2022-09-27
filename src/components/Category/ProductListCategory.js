import React from "react";
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"
import "../../public/css/home.css"

function ProductListCategory ({categoryproduct,onAdd}){
    return(
        <>
        <div className="col-lg-3 col-sm-6">
            <Card  style={{  marginBottom:'20px' }} >
                    <div className="img_product_1">
                    <Card.Img className="img_p" variant="top" src={`../../../${categoryproduct.image}`} />
                    </div>
                    <Card.Body>
                        <Card.Title style={{textAlign:'center'}}>
                            <Link to={`${categoryproduct.path}/${categoryproduct.id}`}>{categoryproduct.title}</Link>
                        </Card.Title>
                        <Card.Text style={{textAlign:'center'}}>
                            Giá: {categoryproduct.price.toFixed(3)} đ
                        </Card.Text>
                        <div style={{padding:'0 40px'}}>
                            <button style={{borderRadius:'5px', backgroundColor:'#98FB98'}} onClick={() => onAdd(categoryproduct)}>Add To Cart</button>
                        </div>
                    </Card.Body>
                </Card>
        </div>
        </>
    )
}

export default ProductListCategory