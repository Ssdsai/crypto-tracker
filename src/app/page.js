'use client';

import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import '@/styles/globals.css';
import '@/styles/pages.css';

// Crypto image mapping
const cryptoImages = {
  bitcoin: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png',
  ethereum: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Eth-diamond-rainbow.png/640px-Eth-diamond-rainbow.png',
  dogecoin: 'https://as2.ftcdn.net/jpg/01/96/64/27/1000_F_196642769_IeVCHzJ4t8pocLXtCYgBw4Y3Su3kdCml.jpg',
  cardano: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
  solana: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Solana_cryptocurrency_two.jpg/1200px-Solana_cryptocurrency_two.jpg',
};

// Function to fetch the crypto data
const fetchCryptoData = async () => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,cardano,solana&vs_currencies=usd'
    );
    return response.data;
  } catch (error) {
    throw new Error('Sorry! CoinDecko allows only 5-15 calls per minute');
  }
};

// Custom hook to fetch crypto data using React Query
const useCryptoData = () => {
  return useQuery('cryptoPrices', fetchCryptoData, {
    refetchInterval: 60000, // Auto refresh every 60s
    refetchOnWindowFocus: false, // Prevent refresh on window focus
  });
};

const CryptoList = ({ data, search, blinkData }) => (
  <div className="crypto-list p-4">
    {Object.keys(data)
      .filter((key) => key.includes(search.toLowerCase()))
      .map((key) => (
        <div key={key} className="crypto-item border p-4 my-2 rounded-md flex items-center justify-between">
          {/* Crypto Image */}
          <img 
            src={cryptoImages[key] || 'DEFAULT_IMAGE_URL'} 
            alt={key} 
            width={32} 
            height={32} 
            className="crypto-image" 
          />
          <h3 className="crypto-name flex-1 ml-2">{key.toUpperCase()}</h3>
          <p className={blinkData[key] ? 'price-blink' : ''}>
            ${data[key].usd.toFixed(2)}
          </p>
        </div>
      ))}
  </div>
);

const Home = () => {
  const [search, setSearch] = useState('');
  const [blinkData, setBlinkData] = useState({});
  const queryClient = useQueryClient();
  const { data, isLoading, error, refetch } = useCryptoData();

  const handleRefresh = () => {
    refetch(); // Triggers data refetch
    setBlinkData((prev) => {
      const newBlinkData = {};
      Object.keys(data).forEach((key) => {
        newBlinkData[key] = true; // Mark all prices to blink
      });
      setTimeout(() => setBlinkData({}), 3000); // Reset blink state after 3 seconds
      return newBlinkData;
    });
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div className="crypto-container">
      <h1 className="crypto-dashboard-title">Dashboard</h1>

      <div className="search-bar-container mb-4">
        <input
          type="text"
          placeholder="Search Cryptocurrency"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
        <div
          onClick={handleRefresh} // Refresh prices and trigger blinking
          className="refresh-emoji text-3xl cursor-pointer"
          title="Refresh Prices"
        >
          <FontAwesomeIcon icon={faArrowsRotate} />
        </div>
      </div>
      <br></br>
      <div>
        <CryptoList data={data} search={search} blinkData={blinkData} />
      </div>
    </div>
  );
};

export default Home;
