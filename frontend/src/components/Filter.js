import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Button } from "@mui/material";
import "./Filter.css";
import Filters from "./Filters";

const Filter = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filters, setFilters] = useState({ make: "", duration: "" });

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
    setDrawerOpen(false);
  };
  return (
    <div className="filter">
      <div className="filter-left">Inventory</div>
      <div className="filter-right">
        <div className="select-section">select Dealer</div>
        <button className="name-section">AAA MITSUBISHI DEALER</button>
      </div>
    </div>
  );
};

export default Filter;
