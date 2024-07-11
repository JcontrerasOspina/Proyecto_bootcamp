const btnEl = document.getElementById("btn");
const galleryEl = document.getElementById("gallery");

async function fecthImage(){
    //const inputValue = document.getElementById("input").value;
    let imgs = "";

    try{
        await fetch(
            `https://api.thecatapi.com/v1/images/search?per_page=10&page=${Math.round(
            Math.random() * 1000
        )}&client_id=live_G0Eynq7m6k8HvpfUc4h0ZZTxbKKCw8YTMCjPg8BQKbBOMk1Rr7yMrJybczqYpqRh`
        ).then((res) =>
            res.json().then((data) =>{
                if (data) {
                    data.forEach((pic) => {
                        imgs += `
                        <img src=${pic.url} alt="image"/>
                        `;
                        galleryEl.style.display = "block";
                        galleryEl.innerHTML = imgs;
                        btnEl.style.display = "block";
                        //errorMessageEl.style.display = "none";
                    });
                }
            })
        );
    }
    catch(error){
        console.log(error)
    }
}

btnEl.addEventListener("click", fecthImage);