'use client'; // Mark the file as a client component

import { QueryClient, QueryClientProvider } from 'react-query'; // Import QueryClient and QueryClientProvider
import Header from '@/reusable-components/header'; // Import Header component
import Footer from '@/reusable-components/footer'; // Import Footer component
import '@/styles/globals.css'; // Import global styles
import '@/styles/footer.css';
import '@/styles/header.css';
import '@/styles/pages.css';
import Home from '@/Home/index';

// Create a QueryClient instance
const queryClient = new QueryClient();

export default function Layout({ children }) {
  return (
    <QueryClientProvider client={queryClient}> {/* Wrap the layout with QueryClientProvider */}
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Crypto Price Tracker</title>
        </head>
        <body className="flex flex-col min-h-screen">
          <Header /> {/* Your header component */}
          <Home />
          <Footer /> {/* Your footer component */}
        </body>
      </html>
    </QueryClientProvider>
  );
}
