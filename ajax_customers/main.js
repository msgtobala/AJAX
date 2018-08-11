document.querySelector(".customer").addEventListener("click", getCustomer);
document.querySelector(".customers").addEventListener("click",getCustomers);
function getCustomer() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET","customer.json",true);
    xhr.onload = function() {
        if(this.status === 200){
            let response = JSON.parse(this.responseText);
            let output = '';
            output = `<li>Name:${response.name}</li><li>Age:${response.age}</li>`;
            document.getElementById("getCustomer").innerHTML = output;
        }
    }
    xhr.onerror = function(){
        console.log(error);
    }
    xhr.send();
}        
function getCustomers() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET","customers.json",true);
    xhr.onload = function() {
        if(this.status === 200){
            let response = JSON.parse(this.responseText);
            let output = '';
            response.forEach(function(itr){
                output += `
                <ul>
                   <li>Name:${itr.name}</li>
                   <li>Age:${itr.age}</li>
                </ul>`;
            });
            document.getElementById("getCustomers").innerHTML = output;
        }
    }

    xhr.send();
} 