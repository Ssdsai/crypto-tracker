# Crypto Price Tracker

Use the Link to view the Website
https://crypto-tracker-6ivbviblk-ssdsais-projects.vercel.app/

## 1. Project setup guide (how to run both web and mobile apps).
- Install dependencies: `npm install`
- Run: `npm run dev` this will start the server
(To view in a web app)
- Runs in localhost:3000
- Node module such as react-query should be installed

(To View a mobile App)
- PWA is added you can create a mobile app by clicking share on the link and to home screen. This works same as an app 
or
- You can also open website in chrome then Right-click on your page and select "Inspect" or press Ctrl + Shift + I (Windows) or Cmd + Option + I (Mac).
- Click the Toggle device toolbar icon (it looks like a mobile device and tablet) or press Ctrl + Shift + M (Windows) / Cmd + Shift + M (Mac).
- In the device toolbar, select a mobile device (like iPhone X, Pixel 2, etc.) from the dropdown menu. Now you can interact like a mobile app


## 2. API integration details (how data is fetched and updated).
- Uses CoinGecko API.
- Data fetched using React Query.
- Caching and Fetching will be handled by react-query
- Used try catch blocks for error handling
- Data is updated in real-time for every 60 seconds (Since there is API call limit for CoinDecko) or Data is also updated when clicked on the refresh button

## 3. State management explanation (why you chose React Query/Zustand/Context API).
- Implemented with React Query so that we can handle it at the server level for realtime api updations.
- 

## 4. Challenges & solutions you faced while building the project.
- Handling API rate limits.
- Optimizing for mobile responsiveness.
- Problem with Docusaurus
