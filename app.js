async function fetchData(){
    try{
        const response = await fetch("https://api.adviceslip.com/advice");
        
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        
        const data = await response.json();
        const adviceid = document.getElementById("adviceId");
        const advice = document.getElementById("advice");
        
        adviceid.innerText = data.slip.id;
        advice.innerText = `"${data.slip.advice}"`;
    }
    catch(error){
        console.error(error);
    }
}
