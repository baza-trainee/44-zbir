// Варіант №1 Через особистий токен клієнта.
const URL = 'https://api.monobank.ua/personal/client-info';
// !!! Особистий токен клієнта з попереднього проєкту на рахунку 100грн.!!!
// !!! Замінити на токен нашого проекту !!!
const KEY = 'uMnBnl8W_cy4gSnm3Dm4gN-um2x4ZYXpLchBrqYZdvRo';

export const fetchAccountBalance = async callback => {
	const response = await fetch(URL, {
		method: 'GET',
		headers: {
			'X-Token': KEY
		}
	});

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	const data = await response.json();
	const balance = Math.floor(data.jars[0].balance / 100);
	callback(balance);
};
