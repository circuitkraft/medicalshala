import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PaymentProcess.css";
import { FaCreditCard } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import profile from "../Images/profile.jpeg";

const PaymentProcess = ({ bookingDetails }) => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  const isPaymentReady =
    selectedMethod === "Credit Card"
      ? cardNumber.length === 16 && expiryDate.length === 5 && cvc.length === 3
      : selectedMethod !== null;

  return (
    <div className="payment-container">
      {/* Header Section */}
      <div className="payment-header">
        <IoArrowBack className="back-icon" onClick={() => navigate(-1)} />
        <h2>Payment</h2>
        <img src={profile} className="profile-icon" alt="profile-picture"/>
      </div>

      {/* Main Content */}
      <div className="payment-content">
        {/* Left Box - Payment Section */}
        <div className="payment-box">
          <h3 className="title">Secure Your Payments Seamlessly</h3>
          <p className="description">
            Complete the transaction through our encrypted payment gateway to
            ensure maximum safety.
          </p>

          <div className="input-group">
            <p>BILLED TO</p>
            <input type="text" placeholder="Name" />
          </div>

          <div className="payment-methods">
            <p>PAYMENT METHOD</p>
            <div className="methods">
            <div
                className={`method ${selectedMethod === "Credit Card" ? "selected" : ""}`}
                onClick={() => setSelectedMethod("Credit Card")}
              >
                <FaCreditCard size={24} />
                <p>Credit Card</p>
              </div>
              <div
                className={`method ${selectedMethod === "Bank Transfer" ? "selected" : ""}`}
                onClick={() => setSelectedMethod("Bank Transfer")}
              >
                <FaUniversity size={24} />
                <p>Bank Transfer</p>
              </div>
              <div
                className={`method ${selectedMethod === "UPI Payment" ? "selected" : ""}`}
                onClick={() => setSelectedMethod("UPI Payment")}
              >
                <FaGooglePay size={24} />
                <p>UPI Payment</p>
              </div>
            </div>
          </div>
          {selectedMethod === "Credit Card" && (
            <div className="credit-card-fields">
              <input
                type="text"
                placeholder="1234 1234 1234 1234"
                maxLength={16}
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ""))}
              />
              <div className="expiry-cvc">
                <input
                  type="text"
                  placeholder="MM / YY"
                  maxLength={5}
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="CVC"
                  maxLength={3}
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value.replace(/\D/g, ""))}
                />
              </div>
            </div>
          )}

          <div className="buttons">
            <button className="cancel-btn">Cancel</button>
            <button className="pay-btn" disabled={!isPaymentReady}>
              Proceed to Pay
            </button>
          </div>
        </div>

        {/* Right Box - Booking Details */}
        <div className="booking-box">
          <h3>Booking Details</h3>
          <div className="details">
            <h4>Patient Details</h4>
            <p><strong>Name:</strong> {bookingDetails?.patientName}</p>
            <p><strong>Age:</strong> {bookingDetails?.age}</p>
            <p><strong>Gender:</strong> {bookingDetails?.gender}</p>
            <p><strong>Contact:</strong> {bookingDetails?.contactNumber}</p>

            <h4>Doctor Details</h4>
            <p><strong>Doctor’s Name:</strong> {bookingDetails?.doctorName}</p>
            <p><strong>Hospital:</strong> {bookingDetails?.hospitalName}</p>
            <p><strong>Date & Slot:</strong> {bookingDetails?.appointmentDate} - {bookingDetails?.slot}</p>

            <h4>Bill Details</h4>
            <p><strong>Consultation Fee:</strong> Rs.{bookingDetails?.fee}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentProcess;