import React from 'react';
import { BsFillCartFill } from "react-icons/bs";

const CarWidget = () => {

    return(
            <button type="button" class="btn position-relative">
                <BsFillCartFill color="" size={30} />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1
                <span class="visually-hidden">unread messages</span>
            </span>
            </button>
    )
}

export default CarWidget