import React, { FC } from 'react';

import { Dashboard, Settings } from './components/popup';
import { Container } from '../styles';
const App: FC = () => (
    <Container className="ashiishme_covid_container">
        <Dashboard />
        <Settings />
    </Container>
);

export default App;
