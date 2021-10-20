import React from 'react';

const DynamicService = ({ id, title, description, img }) => {
    // const { title, description, img } = service;
    console.log(id, title)
    return (
        <div>
            <h2>{id}</h2>
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default DynamicService;