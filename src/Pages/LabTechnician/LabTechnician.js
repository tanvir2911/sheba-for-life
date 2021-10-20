import React from 'react';



const LabTechnician = ({ labTechnician }) => {
    const { title, name, description, img } = labTechnician;
    return (
        <div className="col-3 " style={{ height: "100%" }} >

            <img className="img-fluid" src={img} alt="" />

            <div style={{ backgroundColor: "#f1f1f1", minHeight: "300px" }}>
                <h3 className="fw-light fs-5 pt-2">{title}</h3>
                <h2 className="fs-3">{name}</h2>
                <p>{description}</p>
                <button className="btn-primary border-0 p-2 rounded-3">FIND OUT MORE</button>
            </div>

        </div>
    );
};

export default LabTechnician;