import { Link} from "react-router-dom"
import "../../public/css/home.css"
import Card from 'react-bootstrap/Card'
function ListALlProductCategory ({product,onAdd}){
    return(
        <>
            <div className="col-lg-3 col-sm-6">
             <Card  style={{ marginBottom:'20px' }} >
                    <div className="img_product_1">
                    <Card.Img className="img_p" variant="top" src={product.image} />
                    </div>
                    <Card.Body>
                        <Card.Title style={{textAlign:'center'}}>
                            <Link to={`${product.path}/${product.id}`}>{product.title}</Link>
                        </Card.Title>
                        <Card.Text style={{textAlign:'center'}}>
                            Giá: {product.price.toFixed(3)} đ
                        </Card.Text>
                        <div style={{padding:'0 40px'}}>
                            <button style={{borderRadius:'5px', backgroundColor:'#98FB98'}} onClick={() => onAdd(product)} >Add To Cart</button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default ListALlProductCategory