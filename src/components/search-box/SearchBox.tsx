// import React from "react";
import { ChangeEvent, ChangeEventHandler } from "react";
import "./searchBox.css";

// interface SearchBoxProps {
//   placeholder: string;
//   handleChange:ChangeEventHandler<HTMLInputElement>;
// }

type SearchBoxProps = {
  placeholder: string;
  //   handleChange: ChangeEventHandler<HTMLInputElement>;
  // or in case ur handleChange function return something
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

// export const SearchBox: React.FC<SearchBoxProps> = ({
export const SearchBox = ({ placeholder, handleChange }: SearchBoxProps) => {
  return (
    <div>
      <input
        type="search"
        className="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
