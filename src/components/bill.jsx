const Bill = ({ bill, onSetBill }) => {
  return (
    <div className="bill">
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
};

export default Bill;
