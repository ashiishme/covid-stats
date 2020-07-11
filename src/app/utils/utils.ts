export const statsAbbreviation = (props: number): string => {
    if (!props) return '';
    if (props >= 1e3 && props < 1e6) return (props / 1e3).toFixed(1) + 'K';
    if (props >= 1e6 && props < 1e9) return (props / 1e6).toFixed(1) + 'M';
    if (props >= 1e9 && props < 1e12) return (props / 1e9).toFixed(1) + 'B';
    if (props >= 1e12) return (props / 1e12).toFixed(1) + 'T';
    return props.toString();
};

let code: string = 'NP';

export const filterCountry = (props: Covid.Country[]): Covid.Country[] => {
    let length: number = props.length;
    let country: Covid.Country[] = [];
    while (length--) {
        if (props[length].CountryCode === code) {
            country.push(props[length]);
        }
    }

    return country;
};
