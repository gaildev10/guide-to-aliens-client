document.querySelector("button").addEventListener("click", apiRequest)

async function apiRequest ( ){
    const alienName = document.querySelector("input").value
    try{
        const response = await fetch(`https://voyage-to-star-trek.herokuapp.com/api/${alienName}`)
            const data = response.json()
            console.log(data)

    } catch(error){
        console.log(error)
    }
}
apiRequest()