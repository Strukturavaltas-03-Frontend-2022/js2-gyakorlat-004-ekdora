/* ## 2. feladat
- Fájl: `solutions/app2.js`
- Függvény neve: `countOfWorkingDays`
- Írj egy függvényt, amelynek a visszatérési értéke az adott évben 08. 31-ig 
eltelt munkanapok (hétfő-péntek) száma! */

const firstDayOfYear = new Date('2022-01-01');
const lastDay = new Date('2022-08-31 24:00:00');
const firstDay = firstDayOfYear.getDay() || 7;
const remainingFirstWeekDays = 8 - firstDay;
const remainingFirstWeekWorkDays = remainingFirstWeekDays - 2 > 0 ? remainingFirstWeekDays - 2 : 0;
const oneDay = 24 * 60 * 60 * 1000;
const daysTillNow = Math.round(
	(lastDay.getTime() - firstDayOfYear.getTime()) / oneDay
); // 243
const weeksTillNow = Math.floor((daysTillNow - remainingFirstWeekDays) / 7); // 34
const remainingLastWeekDays = (daysTillNow - remainingFirstWeekDays) - weeksTillNow * 7; //3

const countOfWorkingDays = () => 
	remainingFirstWeekWorkDays + weeksTillNow * 5 + (remainingLastWeekDays > 4 ? 5 : remainingLastWeekDays % 5); // 173

console.log(countOfWorkingDays());

export default countOfWorkingDays;
