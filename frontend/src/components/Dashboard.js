import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  ButtonGroup,
  Button,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

import Filters from "./Filters";
import { fetchInventory } from "../redux/inventorySlice";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./Filter";
import "./dashboard.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import { data } from "./Data";

const Dashboard = () => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.inventory.items);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filters, setFilters] = useState({ make: "", duration: "" });
  const [filter, setFilter] = useState("new");
  const [filter1, setFilter1] = useState("new1");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const recentData = {
    newUnits: 379,
    newMSRP: "$13,023,46",
    newAvgMSRP: "$52,882",
    usedUnits: 67,
    usedMSRP: "$1,576,456",
    usedAvgMSRP: "$23,351",
    cpoUnits: 1,
    cpoMSRP: "$31,200",
  };

  useEffect(() => {
    dispatch(fetchInventory(filters));
  }, [dispatch, filters]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
    setDrawerOpen(false);
  };

  const newCars = inventory.filter((car) => car.condition === "new");
  const usedCars = inventory.filter((car) => car.condition === "used");
  const cpoCars = inventory.filter((car) => car.condition === "cpo");
  

  const newCarsByDate = {};
  const usedCarsByDate = {};
  const cpoCarsByDate = {};
  const newCarsByDate1 = {};
  const usedCarsByDate1 = {};
  const cpoCarsByDate1 = {};

  if (filter === "new") {
    newCars.forEach((element) => {
      const timestamp = element.timestamp;
      const newdate = new Date(timestamp);
      const date = newdate.toISOString().split("T")[0];

      if (newCarsByDate[date]) {
        newCarsByDate[date]++;
      } else {
        newCarsByDate[date] = 1;
      }
    });
  }
  if (filter === "used") {
    usedCars.forEach((element) => {
      const timestamp = element.timestamp;
      const newdate = new Date(timestamp);
      const date = newdate.toISOString().split("T")[0];

      if (usedCarsByDate[date]) {
        usedCarsByDate[date]++;
      } else {
        usedCarsByDate[date] = 1;
      }
    });
  }
  if (filter === "cpo") {
    cpoCars.forEach((element) => {
      const timestamp = element.timestamp;
      const newdate = new Date(timestamp);
      const date = newdate.toISOString().split("T")[0];

      if (cpoCarsByDate[date]) {
        cpoCarsByDate[date]++;
      } else {
        cpoCarsByDate[date] = 1;
      }
    });
  }
  if (filter1 === "new1") {
    newCars.forEach((element) => {
      const timestamp = element.timestamp;
      const newdate = new Date(timestamp);
      const date = newdate.toISOString().split("T")[0];
      const msrp = parseFloat(element.price.replace(/[,]/g, ""));
      
      if (newCarsByDate1[date]) {
        newCarsByDate1[date].count++;
        newCarsByDate1[date].totalMsrp += msrp;
      } else {
        newCarsByDate1[date] = { count: 1, totalMsrp: msrp };
      }
    });
  }
  if (filter1 === "used1") {
    usedCars.forEach((element) => {
      const timestamp = element.timestamp;
      const newdate = new Date(timestamp);
      const date = newdate.toISOString().split("T")[0];
      const msrp = parseFloat(element.price.replace(/[,]/g, ""));

      if (usedCarsByDate1[date]) {
        usedCarsByDate1[date].count++;
        usedCarsByDate1[date].totalMsrp += msrp;
      } else {
        usedCarsByDate1[date] = { count: 1, totalMsrp: msrp };
      }
    });
  }
  if (filter1 === "cpo1") {
    cpoCars.forEach((element) => {
      const timestamp = element.timestamp;
      const newdate = new Date(timestamp);
      const date = newdate.toISOString().split("T")[0];
      const msrp = parseFloat(element.price.replace(/[,]/g, ''));

      if (cpoCarsByDate1[date]) {
        cpoCarsByDate1[date].count++;
        cpoCarsByDate1[date].totalMsrp += msrp;
      } else {
        cpoCarsByDate1[date] = { count: 1, totalMsrp: msrp };
      }
    });
  }
  


  const newcarArray = Object.keys(newCarsByDate).map((date) => ({
    date: date,
    count: newCarsByDate[date],
  }));

  const usedcarArray = Object.keys(usedCarsByDate).map((date) => ({
    date: date,
    count: usedCarsByDate[date],
  }));

  const cpocarArray = Object.keys(cpoCarsByDate).map((date) => ({
    date: date,
    count: cpoCarsByDate[date],
  }));

  const newcarArray1 = Object.keys(newCarsByDate1).map((date) => ({
    date: date,
    count: newCarsByDate1[date].count,
    totalMsrp: newCarsByDate1[date].totalMsrp
  }));

  const usedcarArray1 = Object.keys(usedCarsByDate1).map((date) => ({
    date: date,
    count: usedCarsByDate1[date].count,
    totalMsrp: usedCarsByDate1[date].totalMsrp
  }));

  const cpocarArray1 = Object.keys(cpoCarsByDate1).map((date) => ({
    date: date,
    count: cpoCarsByDate1[date].count,
    totalMsrp: cpoCarsByDate1[date].totalMsrp
  }));




  const handleFilterChange = (type) => {
    setFilter(type);
  };
  const handleFilterChangeforusd = (type) => {
    setFilter1(type);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: "100%", padding: "0 16px" }}>
      <div className="filter-design">
        <Filter />

        <Button
          startIcon={<FilterListIcon sx={{ color: "#FF9926" }} />}
          variant="outlined"
          sx={{
            borderColor: "#FF9926",
            height: "44px",
            width: "175px",
            padding: "0px,16px,0px,16px",
            color: "black",
          }}
          onClick={handleDrawerToggle}
        >
          Open Filters
        </Button>
        <Filters
          open={drawerOpen}
          onClose={handleDrawerToggle}
          applyFilters={applyFilters}
        />
      </div>
      <Divider />
      <div className="letter">Recent Gathered Data 04/01/24</div>
      <Grid container spacing={3} wrap="wrap">
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4">{recentData.newUnits}</Typography>
            <Typography variant="h6" sx={{ color: "#FF9926" }}>
              # New Units
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4">{recentData.newMSRP}</Typography>
            <Typography variant="h6" sx={{ color: "#FF9926" }}>
              New MSRP
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4">{recentData.newAvgMSRP}</Typography>

            <Typography variant="h6" sx={{ color: "#FF9926" }}>
              New Avg. MSRP
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4">{recentData.usedUnits}</Typography>

            <Typography variant="h6" sx={{ color: "#FF9926" }}>
              # Used Units
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4">{recentData.usedMSRP}</Typography>

            <Typography variant="h6" sx={{ color: "#FF9926" }}>
              Used MSRP
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4">{recentData.usedAvgMSRP}</Typography>

            <Typography variant="h6" sx={{ color: "#FF9926" }}>
              Used Avg. MSRP
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4">{recentData.cpoUnits}</Typography>

            <Typography variant="h6" sx={{ color: "#FF9926" }}>
              # CPO Units
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4">{recentData.cpoMSRP}</Typography>

            <Typography variant="h6" sx={{ color: "#FF9926" }}>
              CPO MSRP
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <div className="Inventory">
        <Typography variant="h5">Inventory Count</Typography>
        <ButtonGroup sx={{ mb: 3, gap: 2,marginLeft:"20px" }}>
          <Button
            onClick={() => handleFilterChange("new")}
            variant={filter === "new" ? "contained" : "outlined"}
            color="warning"
          >
            NEW
          </Button>
          <Button
            onClick={() => handleFilterChange("used")}
            variant={filter === "used" ? "contained" : "outlined"}
            color="warning"
          >
            USED
          </Button>
          <Button
            onClick={() => handleFilterChange("cpo")}
            variant={filter === "cpo" ? "contained" : "outlined"}
            color="warning"
          >
            CPO
          </Button>
        </ButtonGroup>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={
              filter === "new"
                ? newcarArray
                : filter === "used"
                ? usedcarArray
                : cpocarArray
            }
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#ff7300" />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      <Box sx={{ mt: 4 }}>
      <div className="Inventory">
        <Typography variant="h5">Average MSRP in USD</Typography>
        <ButtonGroup sx={{ mb: 3, gap: 2 ,marginLeft:"20px"}}>
          <Button
            onClick={() => handleFilterChangeforusd("new1")}
            variant={filter1 === "new1" ? "contained" : "outlined"}
            color="warning"
          >
            NEW
          </Button>
          <Button
            onClick={() => handleFilterChangeforusd("used1")}
            variant={filter1 === "used1" ? "contained" : "outlined"}
            color="warning"
          >
            USED
          </Button>
          <Button
            onClick={() => handleFilterChangeforusd("cpo1")}
            variant={filter1 === "cpo1" ? "contained" : "outlined"}
            color="warning"
          >
            CPO
          </Button>
        </ButtonGroup>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={
              filter1 === "new1"
                ? newcarArray1
                : filter1 === "used1"
                ? usedcarArray1
                : cpocarArray1
            }
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="totalMsrp" fill="#ff7300" />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">History Log</Typography>
        <Divider sx={{ mb: 2 }} />
        <table className="inventory-table">
          <Paper>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>New Inventory</TableCell>
                    <TableCell>New Total MSRP</TableCell>
                    <TableCell>New Average MSRP</TableCell>
                    <TableCell>Used Inventory</TableCell>
                    <TableCell>Used Total MSRP</TableCell>
                    <TableCell>Used Average MSRP</TableCell>
                    <TableCell>Used Average MSRP 2</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.newInventory}</TableCell>
                        <TableCell>{row.newTotalMsrp}</TableCell>
                        <TableCell>{row.newAverageMsrp}</TableCell>
                        <TableCell>{row.usedInventory}</TableCell>
                        <TableCell>{row.usedTotalMsrp}</TableCell>
                        <TableCell>{row.usedAverageMsrp}</TableCell>
                        <TableCell>{row.usedAverageMsrp2}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </table>
      </Box>
    </Box>
  );
};

export default Dashboard;
