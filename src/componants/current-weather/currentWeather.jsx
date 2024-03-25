import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CurrentWeather = ({ data }) => {
  return (
    <Card
      sx={{
        width: 300,
        height: 200,
        borderRadius: 3,
        boxShadow: "10px -2px 20px 2px rgba(0, 0, 0, 0.3)",
        color: "#fff",
        backgroundColor: "#333",
        margin: "20px auto 0",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              component="p"
              sx={{
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: 1,
                letterSpacing: "1px",
                margin: "0",
              }}
            >
              {data.city}
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: 1,
                margin: "0",
              }}
            >
              {data.weather[0].description}
            </Typography>
          </Box>
          <img
            src={`icons/${data.weather[0].icon}.png`}
            style={{ width: "70px" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "70px",
              fontWeight: 600,
              letterSpacing: -4,
            }}
          >
            {Math.round(data.main.temp)}°C
          </Typography>
          <Box sx={{ pl: 0 }}>
            <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
              Feels like {Math.round(data.main.feels_like)}°C
            </Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
              Wind {data.wind.speed} m/s
            </Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
              Pressure {data.main.pressure} m/s
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
