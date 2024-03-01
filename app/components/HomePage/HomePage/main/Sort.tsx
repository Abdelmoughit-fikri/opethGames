import React, { useState } from "react";

interface Props {
  onSelectOrder: (type: string | null) => void;
}

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Date of release" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];

const Sort = ({ onSelectOrder }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // Track selected option

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption  = sortOrders.find((option) => option.value === selectedValue);
    setSelectedOption(selectedOption?.value !== undefined ? selectedOption.value : null);
    if (selectedOption?.value) {
      onSelectOrder(selectedOption.value)
    } else {
      onSelectOrder(null); // Handle default option
    }
  };


  

  return (
    <>
      <select name="select" id="1" onChange={handleChange}>
        {sortOrders.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Sort;
