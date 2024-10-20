import React from 'react';
import './DonateNow.css'; // Importing the CSS for styling

const DonateNow = () => {
  return (
    <div className="donation-form">
      <h2>Donate Now</h2>
      <form>
        <div>
          <label>Full Name*</label>
          <input type="text" name="fullName" required />
        </div>
        <div>
          <label>Mobile number*</label>
          <input type="text" name="mobileNumber" required />
        </div>
        <div>
          <label>Email*</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>PAN Card No.*</label>
          <input type="text" name="panCard" required />
        </div>
        <div>
          <label>Address*</label>
          <input type="text" name="address" required />
        </div>
        <div>
          <label>Pin Code*</label>
          <input type="text" name="pinCode" required />
        </div>
        <div>
          <label>State*</label>
          <input type="text" name="state" required />
        </div>
        <div>
          <label>City*</label>
          <input type="text" name="city" required />
        </div>
        <div>
          <label>Amount*</label>
          <input type="number" name="amount" required />
        </div>
        <div>
          <input type="checkbox" required /> I have read the Privacy Policy & Terms and Conditions.
        </div>
        <button type="submit">Pay</button>
      </form>
      <div className="bank-details">
        <h3>SBI FCRA Account</h3>
        <p>SBI Bank FCRA Account number – 40070204980</p>
        <p>Address: FCRA Cell, 4th Floor, State bank of India, New Delhi Main Branch, Sansad Marg, New Delhi-110001</p>
        <p>SWIFT Code: SBININBB104</p>
        <p>Branch Code: 00691</p>
        <p>Sort Code: 60-01-59</p>
        <p>Equivalent Sort code: 600159</p>
        <p>Note: Please follow the donation guidelines and email us the transaction details after the donation.</p>
      </div>
    </div>
  );
};

export default DonateNow;
