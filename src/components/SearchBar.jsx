import { useState } from "react";

const SearchBar = ({ universities, handleInput, value, setUniversities }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <input
        onChange={(e) => handleInput(e.target.value)}
        value={value}
        type="text"
        name=""
        id=""
      />
      <button
        disabled={!value ? true : false}
        onClick={() => {
          const filtered = universities.filter((obj) =>
            obj.name.includes(value)
          );
          setUniversities(filtered);
          setCount((count) => count + 1);
        }}
      >
        Cerca
      </button>
      <span>{count}</span>
    </div>
  );
};

export default SearchBar;
