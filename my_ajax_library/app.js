document.querySelector(".get_request").addEventListener("click", getData);
document.querySelector(".post_request").addEventListener("click", postData);
document.querySelector(".delete_request").addEventListener("click", deleteData);
document.querySelector(".put_request").addEventListener("click", putData);

const http = new easyHTTP;
const data = {
    title:"Custom post",
    body:"hai,hello how are you?"
};

function getData() {
    var ele = document.getElementById('get_number').value;
    http.get(`https://jsonplaceholder.typicode.com/posts/${ele}`,
        function (message, posts) {
            if (message === null) {
                console.log(posts);
            } else {
                console.log(message);
            }
        });
}

function postData(){
    http.post("https://jsonplaceholder.typicode.com/posts" , data , function(err , message){
        if(err){
            console.log(err);
        }else{
            console.log(message);
        }
    });
}

function putData(){
    http.put( `https://jsonplaceholder.typicode.com/posts/5`, data , function( err , message) {
     if(err){
        console.log(err);
     }else{
         console.log(message);
     }
    });
}

function deleteData(){
    http.delete(`https://jsonplaceholder.typicode.com/posts/1` , data , function( err , message){ 
        if(err === null){
            console.log(message);
        }else{
            console.log(err);
        }
    });
}
