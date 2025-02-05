import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";
function SearchInput() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/search?term=${term}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 flex items-center pl-3">
            <VscSearch className="h-5 w-5 text-gray-500" />
          </div>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="pl-10 py-2 w-full border-0 shadow-none"
            placeholder="SearchPackges"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
