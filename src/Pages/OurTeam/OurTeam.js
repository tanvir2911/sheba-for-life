import React from 'react';

const OurTeam = () => {
    return (
        <div style={{ backgroundColor: "#dddfde" }}>
            <div className="row m-0">
                <div className="col-8 " >
                    <div style={{ width: "100%", padding: "35px", marginTop: "20px" }}>
                        <h2 className="fs-1 mt-md-5">Our <span className="text-danger">Team</span></h2>
                        <p className="mt-3 fs-4">Dr. Stephanie Wosniack is is dedicated to providing her patients with the best possible care. We at MediCare are focused on helping you. After receiving successful care for various aches and pains over the years, Dr. Wosniack found her calling to help others get well</p>
                    </div>

                </div>
                <div className="col-4">
                    <img className="img-fluid pt-2" src="http://medicare.bold-themes.com/laboratory/wp-content/uploads/sites/15/2018/03/img-laboratory-04.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurTeam;