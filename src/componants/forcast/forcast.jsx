import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Daily
      </Typography>
      {data.list.splice(0, 7).map((item, idx) => (
        <Accordion
          key={idx}
          sx={{
            backgroundColor: "#f5f5f5",
            margin: "5px auto",
            borderRadius: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel1a-content-${idx}`}
            id={`panel1a-header-${idx}`}
            sx={{
              padding: "0 20px",
              minHeight: "40px",
              "& .MuiAccordionSummary-content": { margin: "5px 0" },
              "& .MuiAccordionSummary-expandIconWrapper": { color: "#212121" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={`icons/${item.weather[0].icon}.png`}
                  alt="weather"
                  style={{ width: "30px", marginRight: "10px" }}
                />
                <Typography sx={{ fontWeight: 600 }}>
                  {forecastDays[idx]}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  flex: 1,
                }}
              >
                <Typography
                  sx={{ marginLeft: "auto", fontWeight: 400, fontSize: "14px" }}
                >
                  {item.weather[0].description}
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "15px",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#757575",
                  }}
                >
                  {Math.round(item.main.temp_max)}°C /{" "}
                  {Math.round(item.main.temp_min)}°C
                </Typography>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "10px 20px",
              padding: "15px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Pressure:</Typography>
              <Typography>{item.main.pressure}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Humidity:</Typography>
              <Typography>{item.main.humidity}%</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Clouds:</Typography>
              <Typography>{item.clouds.all}%</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Wind speed:</Typography>
              <Typography>{item.wind.speed} m/s</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Sea level:</Typography>
              <Typography>{item.main.sea_level}m</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Feels like:</Typography>
              <Typography>{item.main.feels_like}°C</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default Forecast;
