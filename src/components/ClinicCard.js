import React from "react";

const ClinicCard = ({ clinics }) => {
    return (
        <div className="lists">
            {clinics.map((clinic, index) => (
                <ClinicCard key={index} {...clinic} />
            ))}
        </div>
    );
};

export default ClinicCard;
