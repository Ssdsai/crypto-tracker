'use client';

import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import '../styles/pages.css';

// Crypto image mapping
const cryptoImages = {
  bitcoin: '/images/bitcoin.png', // Store images in `public/images/` for static serving
  ethereum: '/images/ethereum.png',
  dogecoin: '/images/dogecoin.png',
  cardano: '/images/cardano.png',
  solana: '/images/solana.png',
};

// Function to fetch the crypto data
const fetchCryptoData = async () => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,cardano,solana&vs_currencies=usd'
    );
    return response.data;
  } catch (error) {
    throw new Error('Sorry! CoinGecko allows only 5-15 calls per minute');
  }
};

// Custom hook to fetch crypto data using React Query
const useCryptoData = () => {
  return useQuery('cryptoPrices', fetchCryptoData, {
    refetchInterval: 60000, // Auto refresh every 60s
    refetchOnWindowFocus: false,
  });
};

const CryptoList = ({ data, search, blinkData }) => (
  <div className="crypto-list p-4">
    {Object.keys(data)
      .filter((key) => key.includes(search.toLowerCase())) // Case insensitive search
      .map((key) => (
        <div key={key} className="crypto-item border p-4 my-2 rounded-md flex items-center justify-between">
          <Image
            src={cryptoImages[key] || '/images/default-image.png'} // Default fallback image
            alt={key}
            width={32}
            height={32}
            className="crypto-image"
          />
          <h3 className="crypto-name flex-1 ml-2">{key.toUpperCase()}</h3>
          <p className={blinkData[key] ? 'price-blink' : ''}>
            ${data[key]?.usd.toFixed(2)}
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
    refetch();
    setBlinkData((prev) => {
      const newBlinkData = {};
      Object.keys(data).forEach((key) => {
        newBlinkData[key] = true;
      });
      setTimeout(() => setBlinkData({}), 3000);
      return newBlinkData;
    });
  };

  if (isLoading) {
    return <div className="loading-container"><div className="spinner"></div></div>;
  }

  if (error || !data) {
    return <p>Error fetching data: {error?.message}</p>;
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
        <div onClick={handleRefresh} className="refresh-emoji text-3xl cursor-pointer" title="Refresh Prices">
          <FontAwesomeIcon icon={faArrowsRotate} />
        </div>
      </div>

      <CryptoList data={data} search={search} blinkData={blinkData} />
    </div>
  );
};

export default Home;
