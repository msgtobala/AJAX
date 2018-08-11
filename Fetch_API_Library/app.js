document.querySelector(".getData").addEventListener("click", getData);
document.querySelector(".postData").addEventListener("click", postData);
document.querySelector(".putData").addEventListener("click", putData);
document.querySelector(".deleteData").addEventListener("click", deleteData);

const http = new EasyHTTP;

function getData(){
    http.get("https://jsonplaceholder.typicode.com/users")
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

var data = {"name":"balaji","age":20};

function postData(){
    http.post("https://jsonplaceholder.typicode.com/users",data)
         .then(res => console.log(res))
         .catch(err => console.log(err));
}

function putData(){
    http.put("https://jsonplaceholder.typicode.com/users/2",data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

function deleteData(){
    http.delete("https://jsonplaceholder.typicode.com/users/2",data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}