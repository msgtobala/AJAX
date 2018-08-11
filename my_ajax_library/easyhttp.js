function easyHTTP(){
    this.http = new XMLHttpRequest();
}

// GET Request
easyHTTP.prototype.get = function(url , callback){
    this.http.open("GET",url,true);
    this.http.onload = () => {
        if(this.http.status === 200){
            let response = JSON.parse(this.http.responseText);
            callback(null , response);
        }else{
            callback("Error"+this.http.status);
        }
    } 
    this.http.send();
}

// POST Request
easyHTTP.prototype.post = function(url , data , callback){
    this.http.open("POST",url,true);
    this.http.setRequestHeader('Content-type','application/json');
    this.http.onload = () => {
        callback(null,this.http.responseText);
    }
    console.log(JSON.stringify(data));
    this.http.send(JSON.stringify(data));
}

// PUT Request
easyHTTP.prototype.put = function( url , data , callback) {
    this.http.open("PUT", url, true);
    this.http.setRequestHeader('Content-type','application/json');
    this.http.onload = () => {
        callback(this.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

// DELETE Request

easyHTTP.prototype.delete = function( url , data , callback){
    this.http.open("DELETE" , url , true);
    this.http.onload = () => {
        if(this.http.status === 200){
            callback(null , "POST DELETED");

        }else{
            callback("ERROR"+this.http.status);
        }
    }
    this.http.send();
}