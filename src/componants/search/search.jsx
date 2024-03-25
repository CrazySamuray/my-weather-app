import { useState, useEffect } from "react";
import { GEO_API_URL, geoApiOptions } from "../../api";
import { Autocomplete, TextField } from "@mui/material";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);
    const [options, setOptions] = useState([]);

    // Debouncing could be implemented here if needed

    const loadOptions = async (inputValue) => {
        if (!inputValue) return;
        try {
            const response = await fetch(`${GEO_API_URL}?minPopulation=100000&namePrefix=${inputValue}`, geoApiOptions);
            const json = await response.json();
            const newOptions = json.data && Array.isArray(json.data) ? json.data.map((city) => ({
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
            })) : [];
            setOptions(newOptions);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (search) {
            loadOptions(search.label);
        }
    }, [search]);

    return (
        <Autocomplete
            label="Search for a city"
            value={search}
            onChange={(event, newValue) => {
                setSearch(newValue);
                onSearchChange(newValue);
            }}
            onInputChange={(event, newInputValue) => {
                loadOptions(newInputValue);
            }}
            options={options}
            getOptionLabel={(option) => option.label || ""}
            renderInput={(params) => <TextField {...params} label="Search for a city" variant="outlined" />}
        />
    );
};

export default Search;
