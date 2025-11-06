const myBall = document.querySelector('.my-ball');
const myNavBar = document.querySelector('.my-navbar');
const imageStyles = document.querySelectorAll('.image-style');
const mohtava = document.querySelector('.moh-tava');

myBall.addEventListener('click',myBallSide);
let opendByImage = false;
function myBallSide(){
            myNavBar.classList.toggle('active');
            if(!opendByImage){
                        myBall.classList.toggle('rotate');
            } else{
                        opendByImage = false
            }
}


imageStyles.forEach((imageStyle) => {
            imageStyle.addEventListener('click',() => {
                        myNavBar.classList.toggle('active');
                        opendByImage = true;
                        myBall.classList.remove('rotate');
            })
}); 

const buttons = document.querySelectorAll('.top-in button');

buttons.forEach((button) => {
            button.addEventListener('click',() => {
                        buttons.forEach(btn => btn.classList.remove("active-btn"));
                                    button.classList.add("active-btn");
            })
})


const taskButt = document.querySelector('.task-butt');
let taskLoaded = false;
taskButt.addEventListener('click',() => {
            if(!taskLoaded){
              getTitle();
              taskLoaded = true;
            }else{
              alert("Tasks already loaded ✅");
            }
})

async function getTitle() {
            try{
                        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
                        const data = await res.json();
                        const firstTen = data.slice(0,7);
                        const apiContent = document.querySelector('.my-api');
                        


                        firstTen.forEach((user) => {
                                    
                                    const ul = document.createElement('ul');
                                    ul.classList.add('task-row');
                                    apiContent.appendChild(ul)


                                    const liTask = document.createElement('li');
                                    liTask.textContent = `${user.title}`;
                                    ul.appendChild(liTask);


                                    const liDeadLine = document.createElement('li');
                                    liDeadLine.textContent = "2025-04-24";
                                    ul.appendChild(liDeadLine);


                                    const liStatus = document.createElement('li');                 
                                    let completed = true;
                                    if(user.completed){
                                                liStatus.textContent = "Active";
                                                liStatus.style.padding = "4px";
                                                liStatus.style.backgroundColor = "green";
                                                liStatus.style.color = "white";
                                    }else{
                                                liStatus.textContent = "Not Active";
                                                liStatus.style.padding = "4px";
                                                liStatus.style.backgroundColor = "pink";
                                                liStatus.style.color = "white";
                                    }
                                    ul.appendChild(liStatus);


                                    const liTime = document.createElement('li');
                                    liTime.textContent = "01:35:14";
                                    ul.appendChild(liTime);


                                    const liAssign = document.createElement('li');
                                    liAssign.innerHTML = `<img src="taskImage/ball.png" class="w-[40px] h-[40px] rounded-full">`;
                                    ul.appendChild(liAssign)
                        })
            }catch(error){
                        const li = document.createElement('li');
                        li.textContent = "we cant get the results";
                        const ul = document.createElement('ul');
                        ul.appendChild(li);
                        apiContent.appendChild(ul);
            }
}

const addTask = document.querySelector('.add-task');
const makeTask = document.querySelector('.make-task');
let confirmButt = document.querySelector('.ok-button');
const myConfirm = document.querySelector('.my-confirm'); 

 if(!confirmButt){
            confirmButt = document.createElement('button');
            confirmButt.textContent = "OK";
            confirmButt.classList.add('ok-button');
            myConfirm.appendChild(confirmButt);  
            }
confirmButt.style.display = "none";
addTask.addEventListener('click', () => {
if (makeTask.classList.contains('show')) {
               makeTask.classList.remove('show');
               setTimeout(() => {
               makeTask.style.display = "none";
               confirmButt.style.display = "none";
              }, 300);
              } else {
              makeTask.style.display = "flex";
              confirmButt.style.display = "block";
              setTimeout(() => {
              makeTask.classList.add('show');
              }, 10);
  }
});



            if(!confirmButt.dataset.listenerAdded){
              confirmButt.dataset.listenerAdded = "true";
              confirmButt.addEventListener('click',()=> {
                        const apiContent = document.querySelector('.my-api');

                        const ul = document.createElement('ul');
                        ul.classList.add('task-row');
                        let allFilled = true;

                        const inputs = document.querySelectorAll('input');
                        inputs.forEach((input) => {
                        if (input.value.trim() === "") {
                        allFilled = false;
                        input.style.borderColor = "red";
                        } else {
                               input.style.borderColor = "rgb(114, 34, 34)";
                        }
                    });

  if (!allFilled) {
    alert("لطفاً همه‌ی فیلدها را پر کنید!");
    return; // از تابع برگرد، تا تسک ساخته نشه
  }
                        inputs.forEach((input) => {   
                                    const li = document.createElement('li');
                                    li.textContent = input.value;
                                    li.classList.add("change-background");
                                    ul.appendChild(li);
                                    input.value = "";
                        })
                        const liAssign = document.createElement('li');
                        liAssign.innerHTML = `<img src="taskImage/ball.png" class="w-[40px] h-[40px] rounded-full">`;
                        ul.appendChild(liAssign);

                        apiContent.appendChild(ul);
               
                        const makeTask = document.querySelector('.make-task')
                        makeTask.style.display = "none";
                        confirmButt.style.display = "none";

                        const addTask = document.querySelector('.add-task');
                        addTask.style.position = "relative";
                        addTask.style.left = "0px";
            });
          };
//window.addEventListener('DOMContentLoaded', getTitle);


