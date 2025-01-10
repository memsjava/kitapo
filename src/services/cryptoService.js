const API_KEY = 'cda390ea-f336-4e5a-bb5d-df84d221db06';
const WS_URL = 'wss://ws.coincap.io/prices?assets=ALL';
const REST_API_URL = 'https://api.coincap.io/v2';

let ws = null;

export const initWebSocket = (onPriceUpdate) => {
  if (ws) {
    ws.close();
  }

  ws = new WebSocket(WS_URL);

  ws.onopen = () => {
    console.log('WebSocket Connected');
  };

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onPriceUpdate(data);
  };

  ws.onerror = (error) => {
    console.error('WebSocket Error:', error);
  };

  ws.onclose = () => {
    console.log('WebSocket Disconnected');
    // Attempt to reconnect after 5 seconds
    setTimeout(() => initWebSocket(onPriceUpdate), 5000);
  };

  return () => {
    if (ws) {
      ws.close();
    }
  };
};

export const getInitialMarketData = async () => {
  try {
    const response = await fetch(`${REST_API_URL}/assets?limit=20`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      }
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching initial market data:', error);
    throw error;
  }
};
