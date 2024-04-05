// Варіант №2 Через JAR_ID будь якої монобанки.
const BASE_URL = 'https://api.monobank.ua/bank/jar/';

// !!! Випадкова монобанка з інтирнету. на рахунку +- 4435грн.!!!
// !!! Замінити на JAR_ID нашої банки !!!
const JAR_ID = 'W4r9rTbz9waFSQagfoAKddqQy8drF7h';

export const fetchJarBalance = async (callback)=> {
	const URL = `${BASE_URL}${JAR_ID}`;
	const response = await fetch(URL, {
		method: 'GET'
	});

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	const data = await response.json();

	const balance = Math.floor(data.amount / 100);
  callback(balance);
};

// {"amount":423559,"goal":24000000000,"ownerIcon":"https://icons.monobank.com.ua/inf/icon-mdpi/geroycare_1.png","title":"ГЕРОЙCAR збирає на 1000 пікапів для ЗСУ","ownerName":"RUSLAN SHOSTAK CF","currency":980,"description":"Віськовим потрібні автівки. І багато! ГЕРОЙCAR збирає 240 млн грн на закупівлю 1000 авто, серед яких потужні повнопривідні пікапи Ford, SsangYong, буси та інші авто, які так необхідні нашим героям.","jarId":"7ova2RKMZx","blago":true,"closed":false}
