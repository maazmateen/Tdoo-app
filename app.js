var input = document.querySelector(".form-control");
var ol = document.querySelector("ol");
var globalArr = [];

function render(){
    for(var i=0;i<globalArr.length;i++){
        console.log(`${globalArr[i]}`);
        ol.innerHTML += `<li>${globalArr[i]}
        <div><button class= "btn-1" onclick="todoDelete(${i})">Delete</button>
        <button class= "btn-2" onclick="todoEdited(${i})">Edit</button></li><br></div>`;
}
}

function addTodo(){
    ol.innerHTML = "";
    console.log(input.value);
    globalArr.push(input.value);
    console.log(globalArr);
    render()
    input.value = "";
}

function todoDelete(index){
    globalArr.splice(index , 1);
    ol.innerHTML = "";
   render()
    }

function todoEdited(index){
    var editValue = prompt("Enter the value here", globalArr[index])
    globalArr.splice(index,1,editValue)
    ol.innerHTML = ""; 
       render()
        
    }