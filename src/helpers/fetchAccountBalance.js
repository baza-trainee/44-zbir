const URL = 'https://api.monobank.ua/personal/client-info';
const KEY = 'Потрібен токін клієнта';

export const fetchAccountBalance = async () => {
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'X-Token': KEY,
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  console.log(data)
  // const balance = Math.floor(data.jars[0].balance / 100);
  // return balance;
};
