import React, { useState } from "react";
import PropTypes from "prop-types";
import FiltersList from "./FiltersList";

function Filter({ handleCheckbox, filter }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenFilters = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-1/2">
      <button
        className="w-full h-12 text-white text-sm font-Rajdhani"
        type="button"
        onClick={handleOpenFilters}
      >
        FILTER
      </button>
      {isOpen && (
        <FiltersList handleCheckbox={handleCheckbox} filter={filter} />
      )}
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  handleCheckbox: PropTypes.func.isRequired,
  filter: PropTypes.arrayOf(PropTypes.any).isRequired,
};
