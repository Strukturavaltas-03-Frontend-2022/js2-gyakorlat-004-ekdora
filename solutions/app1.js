/* ## 1. feladat
- Fájl: `solutions/app1.js`
- Függvény neve: `getSecondsOfThisYearUntilNow`
- Írj egy függvényt, amelynek a visszatérési értéke az adott év 01. 01-től 08. 31-ig eltelt másodperceinek a száma! 
- _Kerekítést használj, amikor osztasz 1000-rel! (Math.round())_ */

const getSecondsOfThisYearUntilNow = () => Math.round(
	(new Date('2022-08-31').getTime() - new Date('2022-01-01').getTime()) / 1000
);

console.log(getSecondsOfThisYearUntilNow());

export default getSecondsOfThisYearUntilNow;
