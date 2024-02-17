async function getPrayerTimes(city, country, month, year) {
  try {
    const response = await fetch(`https://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=${city.trim()}&country=${country.trim()}&method=3`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
}

export { getPrayerTimes };

