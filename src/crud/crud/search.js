import React from "react";

function Search({value,onChange}) {
   
  return (
    <>
      <input
        className="form-control w-50" 
        type="search" 
        placeholder="search"
        value={value}
        onChange={e => onChange(e.target.value)}
        
        />
    </>
  );
}

export default Search;
