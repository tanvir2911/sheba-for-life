import React, { useEffect, useState } from 'react';
import LabTechnician from '../LabTechnician/LabTechnician';

const LabTechnicians = () => {

    const [labTechnicians, setLabTechnicians] = useState([])
    useEffect(() => {
        fetch('labTechnician.json')
            .then(res => res.json())
            .then(data => setLabTechnicians(data))
    }, [])
    return (
        <div>
            <h2 className="text-danger mt-5 fw-bolder">Technicians</h2>
            <div className="row g-4 m-5">
                {
                    labTechnicians.map(labTechnician => <LabTechnician
                        key={labTechnician.id}
                        labTechnician={labTechnician}
                    ></LabTechnician>)
                }
            </div>
        </div>
    );
};

export default LabTechnicians;