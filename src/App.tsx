import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { theme } from './theme';

import Visualization from './sections/Visualization/Visualization';


function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <BrowserRouter basename="/nbs-city-visualizations">
        <Routes>
          <Route path="/" element={<Navigate to="/city/stockholm" />} />
          <Route path="/city/:city" element={<Visualization />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;