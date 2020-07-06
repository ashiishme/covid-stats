import React, { FC } from 'react';
import { DashboardHead, SectionTitle } from 'styles';
import {
    useAsyncTask,
    covidCountryContext,
    covidGlobalContext,
} from 'app/hooks';
import Country from 'app/components/common/Country';
import Global from 'app/components/common/Global';

const Dashboard: FC = () => {
    const response = useAsyncTask('https://api.covid19api.com/summary');
    // chrome.i18n.getAcceptLanguages(function (list) {
    //     console.log('List: ', list);
    // });

    // if (!navigator.geolocation) {
    //     console.log('TEgeo');
    //     ///navigator.geolocation.getCurrentPosition(hello_there);
    // }

    // const hello_there = (position: {
    //     coords: { latitude: any; longitude: any };
    // }) => {
    //     console.log('Lat: ', position.coords.latitude);
    //     console.log('Lon: ', position.coords.longitude);
    // };

    // chrome.runtime.sendMessage({ command: 'gimmeGimme' }, function (response) {
    //     console.log(response.geoLocation);
    // });

    const countryProvider: Covid.CountryStats = {
        Country: response?.Countries,
        Date: response?.Date,
    };

    const globalProvider: Covid.GlobalStats = {
        Global: response?.Global,
        Date: response?.Date,
    };

    return (
        <div className="ashiishme-covid-dashboard">
            <DashboardHead className="dashboard-header">
                <div className="section-title">
                    <SectionTitle>COVID-19 STATS</SectionTitle>
                </div>
            </DashboardHead>

            <div className="covid-stats">
                <covidCountryContext.Provider value={countryProvider}>
                    <Country />
                </covidCountryContext.Provider>
                <covidGlobalContext.Provider value={globalProvider}>
                    <Global />
                </covidGlobalContext.Provider>
            </div>
        </div>
    );
};

export default Dashboard;
