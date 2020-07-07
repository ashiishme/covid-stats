let code: string = 'NP';

const useFilterCountry = (props: Covid.Country[]): Covid.Country[] => {
    let length: number = props.length;
    let country: Covid.Country[] = [];
    while (length--) {
        if (props[length].CountryCode === code) {
            country.push(props[length]);
        }
    }

    return country;
};

export default useFilterCountry;
