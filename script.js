// console.log("Assignment 05");
function formateDateISO(date){
    let isoString  = date.toISOString();
    let formattedDate = isoString.split("T")[0];
    return formattedDate;
}
let currentDate = new Date();
document.getElementById('todaysDate').innerText = formateDateISO(currentDate);

const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekdays[d.getDay()];
document.getElementById('dayName').innerHTML = day;

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
        let taskName = event.target.parentNode.parentNode.parentNode.getElementsByClassName('title')[0].innerText;
        addActivityList(taskName);
    })
}



function showalertAndCalculateTask(){
    alert("Board updated Successfully");
    let taskAssigned = document.getElementById('task-assigned').innerText; 
    let RemainingtaskAssigned = parseInt(taskAssigned) - 1;
    document.getElementById('task-assigned').innerText = RemainingtaskAssigned;
    if(RemainingtaskAssigned == 0){
        alert("Congratulations! Your All Task has been completed");
    }

    let taskCompleted = document.getElementById('taskCompleted').innerText;
    let TotaltaskCompleted = parseInt(taskCompleted) + 1;
    document.getElementById('taskCompleted').innerText = TotaltaskCompleted;

}


function addActivityList(taskName){
    let activityContainer = document.getElementById('activityContainer');
    let li = document.createElement('li');
    let now = new Date();
    let time = now.toLocaleTimeString('en-US');
    li.innerHTML = `<p>You have completed <b>${taskName}</b> at ${time}. </p>`;
    li.classList.add('listStyle');
    activityContainer.appendChild(li);
}


document.getElementById('questions').addEventListener('click', function(){
    window.location.href="questions.html";
})