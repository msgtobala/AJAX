document.querySelector(".get-jokes").addEventListener("click",getjokes);

function getjokes(e) {
    let jokes  = document.getElementById('number_jokes').value;
    console.log(jokes);

    let xhr = new XMLHttpRequest();

    xhr.open("GET",`http://api.icndb.com/jokes/random/${jokes}`,true);
    xhr.onload = function(){
        if(this.status === 200){
            let output = "";
            let response = JSON.parse(this.responseText);
            console.log(response);
            if(response.type === "success"){
                response.value.forEach(function(itr){
                    output += `<li>${itr.joke}</li>`;
                });
            }
            document.getElementById('jokes_here').innerHTML = output;
        }
    }
    xhr.send();
    e.preventDefault;
}