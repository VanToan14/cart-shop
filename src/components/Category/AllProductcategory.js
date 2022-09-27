import React from "react";
import { DataProduct } from "../../data/DataProduct";
import ListALlProductCategory from "./ListALlProductCategory";

function AllProductCategory ({onAdd}){
    return(
        <>
            <h1 style={{textAlign:'center', padding:'5px 0'}}>Tất cả sản phẩm </h1>
            <div className="row">
                {DataProduct.map(product=>(
                    <ListALlProductCategory
                        key={product.id}
                        product={product}
                        onAdd={onAdd}
                    />
                ))}
            </div>
        </>
    )
}
export default AllProductCategory