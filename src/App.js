
import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({ name: "", sol: "", lang: "English" });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {step === 1 && (
        <div>
          <h2>Welcome to OTS App</h2>
          <input placeholder="Enter Name" onChange={(e) => setUser({ ...user, name: e.target.value })} /><br/>
          <input placeholder="Enter SOL ID (8701-8771)" type="number" onChange={(e) => setUser({ ...user, sol: e.target.value })} /><br/>
          <select onChange={(e) => setUser({ ...user, lang: e.target.value })}>
            <option>English</option>
            <option>Hindi</option>
          </select><br/>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Search Account (Phase 2)</h2>
          <input placeholder="Enter Account Number or Name" /><br/>
          <input placeholder="Legal Charges Pending (if any)" type="number" /><br/>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div style={{ background: "#ffa726", padding: "20px", borderRadius: "10px" }}>
          <h2>Account Details</h2>
          <p><strong>Account No:</strong> 8725CF00000310</p>
          <p><strong>NPA Date:</strong> 01/04/2023</p>
          <p><strong>NPA Category:</strong> Doubtful</p>
          <p><strong>Borrower Name:</strong> Ram Singh</p>
          <p><strong>CIF ID:</strong> 00000310</p>
          <p><strong>CIF Current Outstanding:</strong> ₹3,19,681.81</p>
          <p><strong>RI + DI:</strong> ₹1,20,000</p>
          <p><strong>CIF Principal Outstanding:</strong> ₹2,85,000</p>
          <p><strong>Notional Dues:</strong> ₹3,60,000</p>
          <p><strong>Sacrifice:</strong> ₹65,000</p>
          <p style={{ color: "red", fontWeight: "bold" }}>
            Minimum Compromise Amount: ₹1,98,544 (Based on 70%)
          </p>
          <button onClick={handleBack}>Back</button>
        </div>
      )}

      <footer style={{ marginTop: "20px", fontSize: "12px" }}>
        © P.RAA
      </footer>
    </div>
  );
}

export default App;
