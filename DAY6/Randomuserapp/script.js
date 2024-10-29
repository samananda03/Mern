const url= "https://randomuser.me/api";

async function getUser() {
    try{
        const res = await fetch(url);
        const data= await res.json();
        const user= dara.results[0];

        document.getElementById('user-profile').innerHTML = `
        <p>Name: ${user.name.first} ${user.name.last}</p>
        <p>Email:${user.email}</p>
        <p>Location: ${user.location.city},${user.location.country}</p>`;


    }
    catch(error){
        console.error('Error fetching user data: ',error);
    }

}

getUser();