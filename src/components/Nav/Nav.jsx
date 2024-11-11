import React, { useState, useEffect, useRef } from "react";
import "./Nav.css";
import display from './display.svg'
import down from './down.svg'

const Nav = ({displayOpen,setDisplay,grouping,setGrouping,ordering,setOrdering}) => {

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
  };

  const handleOrderingChange = (e) => {
    setOrdering(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setDisplay(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div>
        <button
          ref={buttonRef}
          className="dropdown-button"
          onClick={() => setDisplay(!displayOpen)}
        >
          <img src={display}/> Display <img src={down}/> 
        </button>
        {displayOpen && (
          <div ref={dropdownRef} className="dropdown-content">
            <div className="grouping1">
              Grouping
              <div>
                <select className="opt" value={grouping} onChange={handleGroupingChange}>
                  <option value="Status">Status</option>
                  <option value="User">User</option>
                  <option value="Priority">Priority</option>
                </select>
              </div>
            </div>

            <div className="grouping2">
              Ordering
              <div>
                <select className="opt" value={ordering} onChange={handleOrderingChange}>
                  <option value="Priority">Priority</option>
                  <option value="Title">Title</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
