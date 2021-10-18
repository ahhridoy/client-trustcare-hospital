import React from 'react';
import { Image } from 'react-bootstrap';
import notFound from "../../images/page-not-found.png"

const NotFound = () => {
    return (
        <div>
            <Image src={notFound} fluid></Image>
        </div>
    );
};

export default NotFound;