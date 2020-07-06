import React, { FC } from 'react';
import { UpdatedStats, StatsHead, StatsDetails } from 'styles';
import Text from './Text';
import { useCovidCountryContext } from 'app/hooks';
const Country: FC = () => {
    const { Country, Date } = useCovidCountryContext();
    console.log('Country: ', Country);
    console.log('Country: ', Date);

    return (
        <div className="stats-user-country">
            <UpdatedStats className="dashboard-update-status">
                <span className="update-status">
                    Last updated: 05 July, 2020
                </span>
            </UpdatedStats>
            <StatsHead className="stats-head">
                <h3>
                    <span>Nepal</span>
                </h3>
            </StatsHead>
            <StatsDetails className="stats-details">
                <div className="stats-confirmed">
                    <Text
                        textClass="stats-label stats-confirmed-label"
                        text="confirmed"
                        allowSpan={true}
                    />
                    <Text
                        textClass="stats-count stats-confirmed-count"
                        text="15,491"
                        allowSpan={false}
                    />
                </div>
                <div className="stats-recovered">
                    <Text
                        textClass="stats-label stats-recovered-label"
                        text="recovered"
                        allowSpan={true}
                    />
                    <Text
                        textClass="stats-count stats-recovered-count"
                        text="6,415"
                        allowSpan={false}
                    />
                </div>
                <div className="stats-death">
                    <Text
                        textClass="stats-label stats-death-label"
                        text="death"
                        allowSpan={true}
                    />
                    <Text
                        textClass="stats-count stats-death-count"
                        text="34"
                        allowSpan={false}
                    />
                </div>
            </StatsDetails>
        </div>
    );
};

export default Country;
