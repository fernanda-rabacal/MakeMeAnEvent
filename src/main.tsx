import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './app/App';
import { EventContextProvider } from './contexts/EventContext';
import { GlobalStyle } from './global';
import { defaultTheme } from './styles/defaultTheme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <EventContextProvider>
          <App />
          <GlobalStyle />
        </EventContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);