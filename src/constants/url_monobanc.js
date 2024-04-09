// Посилання на монобанку. !!! Замінити на url нашої банки !!!
// Зразок посилання: https://send.monobank.ua/jar/7ova2RKMZx
export const DONATION_URL = '#';
// URL балансу до монобанки через JAR_ID.
const BALANSE_BASE_URL = 'https://api.monobank.ua/bank/jar/';
// !!! Випадкова монобанка з інтирнету !!!
// !!! Замінити на JAR_ID нашої банки !!!
const JAR_ID = 'W4r9rTbz9waFSQagfoAKddqQy8drF7h';

export const BALANSE_URL = `${BALANSE_BASE_URL}${JAR_ID}`;
// Залишились питання по налаштуванню - пишіть: brodich_vlad@ukr.net