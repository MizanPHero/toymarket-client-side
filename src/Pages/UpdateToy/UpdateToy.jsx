import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateToy = () => {
    const toy = useLoaderData();
    const {toyName, sellerName, sellerEmail, toyPicture, subCategory, description, quantity, price, rating} = toy;
    console.log(toy);
    return (
        <div>
            this edit page
        </div>
    );
};

export default UpdateToy;