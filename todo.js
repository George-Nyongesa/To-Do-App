//variable initioalization
let inputBox=document.getElementById('input-box');
let listContainer=document.getElementById('list-container');

//a function to add tasks to the list on clicking the add button
function addTask(){
    //check if the input box was empty and display an alert message to add text
    if(inputBox.value===''){
        alert("You must add text!");
    }
         //if the text is added to the input box then append the text
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
        saveData();
    }
    inputBox.value='';
}
//Adding an event listener to the Enter key of the keyboard
inputBox.addEventListener('keydown', (e) => {
    if(e.key ==='Enter'){
        //check if the input box was empty and display an alert message to add text
        if(inputBox.value===''){
            alert("You must add text!");
        }
            //if the text is added to the input box then append the text
        else{
            let li=document.createElement('li');
            li.innerHTML=inputBox.value;
            listContainer.appendChild(li);
            let span=document.createElement('span');
            span.innerHTML='\u00d7';
            li.appendChild(span);
            saveData();
        }
        inputBox.value='';
    }
});
//Add event listener to the list container to either check an item or remove it from the list and save the data to the local storage
listContainer.addEventListener('click',(e) => {
    //listens for a click and marks an item as checked then saves the data
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
        //listens for a click, unchecks the item, and saves the data
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);
//a function to save data to a local storage
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
//a function to display the stored data
function showData(){
    listContainer.innerHTML=localStorage.getItem('data');
}
showData();
