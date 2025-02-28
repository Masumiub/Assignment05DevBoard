// console.log("Assignment 05");
let formateDateISO = (date) =>{
    let isoString  = date.toISOString();
    let formattedDate = isoString.split("T")[0];
    return formattedDate;
}
let currentDate = new Date();
document.getElementById('todaysDate').innerText = formateDateISO(currentDate);


document.getElementById("changeThemeBtn").addEventListener('click', function(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('mainbg').style.backgroundColor = "#" + randomColor;
})


document.getElementById("clear-history-btn").addEventListener('click', function(){
    document.getElementById('activityContainer').innerHTML = '';
})

let completeBtns = document.getElementsByClassName('completeBtn');

for(let i=0; i<completeBtns.length; i++ ){
    let clickedBtn = completeBtns[i];
    completeBtns[i].addEventListener("click", showalertAndCalculateTask);
    completeBtns[i].addEventListener("click", function(event){
        event.target.setAttribute('disabled', '');
    })
}



function showalertAndCalculateTask(){
    alert("Task has been completed");
    let taskAssigned = document.getElementById('task-assigned').innerText; 
    let RemainingtaskAssigned = parseInt(taskAssigned) - 1;
    document.getElementById('task-assigned').innerText = RemainingtaskAssigned;
    if(RemainingtaskAssigned == 0){
        alert("Congratulations! Your All Task has been completed");
    }

    let taskCompleted = document.getElementById('taskCompleted').innerText;
    let TotaltaskCompleted = parseInt(taskCompleted) + 1;
    document.getElementById('taskCompleted').innerText = TotaltaskCompleted;


    let activityContainer = document.getElementById('activityContainer');
    let li = document.createElement('li');
    let now = new Date();
    li.innerHTML = `<p>You have completed at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} </p>`;
    li.classList.add('listStyle');
    activityContainer.appendChild(li);

}