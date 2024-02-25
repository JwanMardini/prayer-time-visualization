import getUserInfo from './fetchUserdata.js';
import { getPrayerTimes } from "./fetchPrayerTime.js";

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
let data;

function displyTodayPrayerTimes(data, city, country) {

    const today = new Date().getDate();
    const todayPrayerTimes = data[today - 1].timings;
    const todayPrayerTimesDiv = document.querySelector(".todayPrayerTimes");
    todayPrayerTimesDiv.innerHTML = `
    <h3>Today's Prayer Times</h3>
    <p>Date: ${new Date().toDateString()}</p>
    <p>City: ${city}</p>
    <p>Country: ${country}</p>
    <p>Fajr: ${todayPrayerTimes.Fajr}</p>
    <p>Sunrise: ${todayPrayerTimes.Sunrise}</p>
    <p>Dhuhr: ${todayPrayerTimes.Dhuhr}</p>
    <p>Asr: ${todayPrayerTimes.Asr}</p>
    <p>Maghrib: ${todayPrayerTimes.Maghrib}</p>
    <p>Isha: ${todayPrayerTimes.Isha}</p>
    `;
}

async function init() {
    const userCity = await getUserInfo();
    console.log(userCity)
    data = await getPrayerTimes(userCity.city, userCity.country_name, month, year);
    displyTodayPrayerTimes(data, userCity.city, userCity.country_name);
}

init();


// function displayPrayerTimes(data) {
//     const table = document.querySelector(".table");
//     table.innerHTML = `
//     <tr>
//         <th>Date</th>
//         <th>Fajr</th>
//         <th>Sunrise</th>
//         <th>Dhuhr</th>
//         <th>Asr</th>
//         <th>Maghrib</th>
//         <th>Isha</th>
//     </tr>
//     `;
//     data.forEach((day) => {
//         const date = new Date(day.date.readable);
//         const fajr = day.timings.Fajr;
//         const sunrise = day.timings.Sunrise;
//         const dhuhr = day.timings.Dhuhr;
//         const asr = day.timings.Asr;
//         const maghrib = day.timings.Maghrib;
//         const isha = day.timings.Isha;
//         table.innerHTML += `
//         <tr>
//             <td>${date.toDateString()}</td>
//             <td>${fajr}</td>
//             <td>${sunrise}</td>
//             <td>${dhuhr}</td>
//             <td>${asr}</td>
//             <td>${maghrib}</td>
//             <td>${isha}</td>
//         </tr>
//         `;
//     });
// }
