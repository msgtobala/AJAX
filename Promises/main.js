let posts = [
    {"name":"post1","body":"Post One"},
    {"name":"post2", "body" : "Post Two"}
];


function getPosts(){
    let output = "";
    posts.forEach(function(itr){
        output += `<li>${itr.name}</li>`;
    });
    document.getElementById('posts').innerHTML = output;
}


function createposts(post){
 return new Promise(function( resolve , reject){
    posts.push(post);
    let errorVar = false;
    if(errorVar === false){
        resolve();
    }else{
        reject("SOMETHING WENT WRONG");
     }
 });
}


createposts({"name":"post3","body":"Post Three"})
.then(getPosts)
.catch(function(err){
    console.log(err);
});