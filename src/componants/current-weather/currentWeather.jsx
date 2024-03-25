import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CurrentWeather = ({ data }) => {
  return (
    <Card sx={{
      width: 300,
      borderRadius: 6,
      boxShadow: "10px -2px 20px 2px rgba(0, 0, 0, 0.3)",
      color: '#fff',
      backgroundColor: '#333',
      margin: '20px auto 0',
      padding: '0 20px 20px',
    }}>
      <CardContent sx={{ padding: '20px 0 0 !important' }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          paddingBottom: '20px' 
        }}>
          <Box>
            <Typography variant="h6" component="p" sx={{
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: 1,
              letterSpacing: '1px',
              margin: '0',
            }}>
              {data.city}
            </Typography>
            <Typography sx={{
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: 1,
              margin: '0',
            }}>
              {data.weather[0].description}
            </Typography>
          </Box>
          <img
            alt="weather"
            src={`icons/${data.weather[0].icon}.png`}
            sx={{
              width: 100,
            }}
          />
        </Box>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          fontSize: '70px', 
          fontWeight: 600, 
          letterSpacing: '-5px', 
          margin: '10px 0' 
        }}>
          {Math.round(data.main.temp)}°C
        </Box>
        <Box sx={{ paddingLeft: '20px' }}>
          {/* Details section, map over each detail if you have multiple to render */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: '12px', fontWeight: 400 }}>Feels like</Typography>
            <Typography sx={{ fontSize: '12px', fontWeight: 600 }}>
              {Math.round(data.main.feels_like)}°C
            </Typography>
          </Box>
          {/* Repeat for other details */}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
