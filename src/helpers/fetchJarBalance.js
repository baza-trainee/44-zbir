import { BALANSE_URL } from '../constants/url_monobanc';
// Запит до монобанки через JAR_ID.

const fetchJarBalance = async (callback) => {
	try {
		const response = await fetch(BALANSE_URL, {
		method: 'GET'
	});

		if (response.ok) {
			const data = await response.json();
			//  !!! Видалити testLogResult після тестувань !!!
			testLogResult(data);

			const balance = Math.floor(data.amount / 100);
			callback(balance);
		} else {
			throw new Error(response.status);
		}
	} catch (error) {
		console.error('Fetch', error);
	}
};

export default fetchJarBalance;
	//  !!! Start Видалити testLogResult після тестувань !!!
function testLogResult(data) {
	const result = `
	Тестування запитів балансу моно банки. Оновлення +- одна хвилина,
	_________________________________________________________________
	Результат звірити з данними на сторінці банки
	-----------------------------------------------------------------
	Ім'я: ${data.ownerName}, 
	Заголовок: ${data.title}
	Вже зібрано: ${data.amount / 100} Грн.
	Мета: ${data.goal / 100} Грн.
	Опис: ${data.description}`;
	console.log(result);
}
	//  !!! End Видалити testLogResult після тестувань !!!

// Зразок Ок-відповіді на запит даних. вивід в console.log для тестів: 
//{ "amount": 423559, "goal": 24000000000, "ownerIcon": "https://icons.monobank.com.ua/inf/icon-mdpi/geroycare_1.png", "title": "ГЕРОЙCAR збирає на 1000 пікапів для ЗСУ", "ownerName": "RUSLAN SHOSTAK CF", "currency": 980, "description": "Віськовим потрібні автівки. І багато! ГЕРОЙCAR збирає 240 млн грн на закупівлю 1000 авто, серед яких потужні повнопривідні пікапи Ford, SsangYong, буси та інші авто, які так необхідні нашим героям.", "jarId": "7ova2RKMZx", "blago": true, "closed": false }
