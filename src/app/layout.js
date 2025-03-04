'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import Header from '../reusable-components/header';
//import Home from '../Home/index';
import Footer from '../reusable-components/footer';

import '../styles/globals.css'; // Import global styles **ONLY here**
import '../styles/header.css';
import '../styles/pages.css';

const queryClient = new QueryClient();

export default function Layout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Crypto Price Tracker</title>
        </head>
        <body className="flex flex-col min-h-screen">
          <Header />
          <main>{children}</main> {/* Render children if provided */}
          <Footer />
        </body>
      </html>
    </QueryClientProvider>
  );
}
