import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchInventory } from "../redux/inventorySlice";
import Drawer from "@mui/material/Drawer";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Typography, FormControlLabel, Box } from "@mui/material";
const Filters = ({ open, onClose, applyFilters }) => {
  const makes = ["Ford", "Cadillac", "Jeep"];
  const durations = [
    "Last Month",
    "This Month",
    "Last 3 Months",
    "Last 6 Months",
    "This Year",
    "Last Year",
  ];
  const handleApplyFilters = () => {
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 300, p: 3 }}>
        <Typography variant="h5">Filter Data By</Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1">MAKE</Typography>
          {makes.map((make) => (
            <FormControlLabel
              key={make}
              control={<Checkbox defaultChecked />}
              label={make}
            />
          ))}
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1">DURATION</Typography>
          {durations.map((duration) => (
            <FormControlLabel
              key={duration}
              control={<Checkbox defaultChecked />}
              label={duration}
            />
          ))}
        </Box>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            color="warning"
            onClick={handleApplyFilters}
          >
            APPLY FILTER
          </Button>
          <Button
            variant="outlined"
            color="warning"
            onClick={handleApplyFilters}
          >
            REMOVE ALL FILTERS
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Filters;
