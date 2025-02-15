import React from "react";

const DoctorCard = ({ doctors }) => {
    return (
        <div className="lists">
            {doctors.map((doctor, index) => (
                <DoctorCard key={index} {...doctor} />
            ))}
        </div>
    );
};

export default DoctorCard;
