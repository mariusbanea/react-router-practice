import React from 'react'
import {useParams} from "react-router-dom";

function GrandChild() {
    // Access the dynamic pieces of the URL.
    let { meta } = useParams();
    return(
        <div className='search'>
            <h2>GrandChild Component</h2>
            <h6>The grand child says: {meta}</h6>
        </div>
    )
}

export default GrandChild
