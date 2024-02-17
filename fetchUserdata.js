//https://ipinfo.io/json?token=a4b2f0c4557862

async function getUserCity() {
    const response = await fetch("https://ipinfo.io/json?token=a4b2f0c4557862");
    const data = await response.json();
    return data; 
}

export default getUserCity;



