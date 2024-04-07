import { BASE_URL, JAR_ID } from "../constants/url_monobanc";
// Запит до монобанки через JAR_ID.

const fetchJarBalance = async (callback)=> {
	const URL = `${BASE_URL}${JAR_ID}`;
	const response = await fetch(URL, {
		method: 'GET'
	});

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	const data = await response.json();
	//  !!! Видалити console.log після тестувань !!!
	console.log(data)
	const balance = Math.floor(data.amount / 100);
  callback(balance);
};
export default fetchJarBalance

// Зразок Ок-відповіді на запит даних. вивід в console.log для тестів: 
//{ "amount": 423559, "goal": 24000000000, "ownerIcon": "https://icons.monobank.com.ua/inf/icon-mdpi/geroycare_1.png", "title": "ГЕРОЙCAR збирає на 1000 пікапів для ЗСУ", "ownerName": "RUSLAN SHOSTAK CF", "currency": 980, "description": "Віськовим потрібні автівки. І багато! ГЕРОЙCAR збирає 240 млн грн на закупівлю 1000 авто, серед яких потужні повнопривідні пікапи Ford, SsangYong, буси та інші авто, які так необхідні нашим героям.", "jarId": "7ova2RKMZx", "blago": true, "closed": false }
