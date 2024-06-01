import { useState } from "react";

function Popup() {
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");

  // Handler when user clicks "No"
  const handleNo = () => {
    console.log("Purchase cancelled.");
    alert(
      "Thanks for reconsidering. We're closing this popup to let you think it over."
    );
    window.close(); // Closes the popup
  };

  // Handler when user clicks "Yes"
  const handleYes = () => {
    if (!reason.trim()) {
      setError("Please provide a reason for needing this item.");
      return;
    }
    console.log("Purchase confirmed.");
    alert("Purchase confirmed. Proceeding with your order.");
    console.log(`Reason: ${reason}`);
    window.close(); // Closes the popup
  };

  return (
    <div className="w-[500px]  m-auto bg-slate-50 p-5 border rounded-lg shadow">
      <h2 className="text-center font-bold text-xl mb-2">Wait a Moment! 😳</h2>
      <p className="text-center text-sm mb-4">
        Take a moment to think about your purchase. This quick check can help
        you avoid unnecessary spending.
      </p>
      <div className="text-center font-medium text-lg mb-4">
        Are you sure you need to buy this item right now? Please write below why
        you need this item.
      </div>
      <div className="flex justify-center my-4  text-5xl ">🕵🏼👀</div>
      {/* Text input for reason */}
      <textarea
        value={reason}
        onChange={(e) => {
          setReason(e.target.value);
          if (error) setError("");
        }}
        placeholder="Enter your reason here..."
        className="w-full p-2 border rounded mb-4"
      />
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <div className="flex justify-between gap-4">
        <button
          className="rounded bg-red-600 hover:bg-red-700 px-6 py-2 text-white transition-colors duration-200"
          onClick={handleNo}
        >
          No, Let Me Think
        </button>
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-colors duration-200"
          onClick={handleYes}
        >
          Yes, I Need It
        </button>
      </div>
    </div>
  );
}

export default Popup;
