import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import {Link} from 'react-router-dom'

function ListCategory ({category}){
    return(
        <>
            <Link to={`${category.path}/${category.id}`} >
                <ListGroup.Item  action variant="light">
                  {category.name} 
                </ListGroup.Item>
            </Link>
        </>
    )
}
export default ListCategory