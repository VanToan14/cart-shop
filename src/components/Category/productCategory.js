import React from "react";
import { useParams } from "react-router-dom";
import { DataProduct } from "../../data/DataProduct";
import ProductListCategory from "./ProductListCategory";


function ProductCategory (props){
    const {onAdd}=props;
    const { id } = useParams();
    const singleCategory = DataProduct.filter(product => String(product.topid) === id) 
    return(
        <>
            <div style={{fontSize:'30px',margin:'0px 50px'}}>
                    {singleCategory.length === 0 &&<div> chưa có sản phẩm  </div>}
            </div>
            <div className="row">
                
                {singleCategory.map(categoryproduct=>(
                    <ProductListCategory
                        key={categoryproduct.id}
                        categoryproduct={categoryproduct}
                        onAdd={onAdd}
                    />
                ))}
               
            </div>
            
        </>
    )
}
export default ProductCategory