document.querySelector(".gettxt").addEventListener("click",getTxt);
document.querySelector(".getjson").addEventListener("click",getJson);
document.querySelector(".getapi").addEventListener("click",getApi);

function getTxt(){
    fetch("db.txt")
    .then( res => res.text()
    ).then(data  => {
        console.log(data);
        document.getElementById('txt').innerHTML = data;
    })
    .catch(err => console.log(err))
}

function getJson(){
    fetch("db.json")
    .then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
        let output = "";
        data.forEach(function(itr){
            output += `<li>${itr.NAME}</li>`;
        });
        document.getElementById('txt').innerHTML = output;
    })
    .catch(function(err){
        console.log("SOMETHING WENT WRONG");
    })
}

function getApi(){
    fetch("https://api.github.com/users")
    .then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
        let output = "";
        data.forEach(function(user){
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('txt').innerHTML = output;
    })
    .catch(function(err){
        console.log("SOMETHING WENT WRONG");
    })
}