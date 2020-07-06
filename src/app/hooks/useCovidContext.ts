import { createContext, useContext } from 'react';

export const covidGlobalContext = createContext<Covid.GlobalStats>({
    Global: [],
    Date: new Date(),
});
export const covidCountryContext = createContext<Covid.CountryStats>({
    Country: [],
    Date: new Date(0),
});

export const useCovidGlobalContext = () => {
    return useContext(covidGlobalContext);
};

export const useCovidCountryContext = () => {
    return useContext(covidCountryContext);
};
