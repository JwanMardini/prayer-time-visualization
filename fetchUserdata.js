// Purpose: Fetch user's location data from IP address
async function getUserInfo() {
    const userLoc = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=8afb19cd45794868a38fcf45ace24cb3')
    const data = await userLoc.json();
    console.log(data)
    return data;
}

export default getUserInfo ;



// Function to fetch user's IP address
// async function getIpAddress() {
//     const response = await fetch("https://api.ipify.org?format=json");
//     const data = await response.json(); // Corrected to use json() method
//     return data.ip;
// }


// //https://ipinfo.io/json?token=a4b2f0c4557862

// async function getUserCity() {
//     const response = await fetch("https://ipinfo.io/json?token=a4b2f0c4557862");
//     const data = await response.json();
//     return data; 
// }

// export default getUserCity;
