export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '78c99f5d4dmsh56243d39f263be9p19e43djsna9cb0f29689c',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

try {
	const response = await fetch(GEO_API_URL, geoApiOptions);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"
export const WEATHER_API_KEY = "1bd486d26b20268f72c717dca4bfbab1";