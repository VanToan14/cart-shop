import React from "react";
import ListCategory from "../components/Category/ListCategory";
import {DataCategory} from "../data/DataCategory";
import ListGroup from 'react-bootstrap/ListGroup'
import {Outlet} from 'react-router-dom'

function Shop (){
    return(
        <div className="container" style={{marginTop:'15px'}}>
            <div className="row">
                <div className="col-lg-3 col-sm-12">
                 <ListGroup>
                    <ListGroup.Item style={{textAlign:'center'}}variant="primary">Danh Mục Sản Phẩm </ListGroup.Item>
                    {DataCategory.map(category=>(
                        <ListCategory
                            key={category.id}
                            category={category}
                        />
                    ))}
                </ListGroup>
                </div>
                <div className="col-lg-9 col-sm-12">
                <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default Shop