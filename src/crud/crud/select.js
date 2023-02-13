import React from "react";

function Select({ options, defaultValue, onChange, value }) {
  return (
    <>
      <select 
      value={value}
      onChange={e => onChange(e.target.value)}
      className="form-select w-25">
        <option disabled value="">{defaultValue}</option>
        {options.map((item) => (
          <option key={item.value} value={item.value}>{item.name}</option>
        ))}
      </select>
    </>
  );
}

export default Select;
