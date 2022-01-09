showTodo()
showDonrTasks()

input.addEventListener("keyup", e => {
    if (e.key == "Enter" && input.value != "") {

        console.log(input.value);

        let todos = localStorage.getItem("todos");
        let starItem = localStorage.getItem("starItem");
        if (todos == null) {
            todosObj = [];
            starObj = [];
        }
        else {
            todosObj = JSON.parse(todos);
            starObj = JSON.parse(starItem);
        }

        todosObj.push(input.value);
        starObj.push(0);

        localStorage.setItem("todos", JSON.stringify(todosObj));
        localStorage.setItem("starItem", JSON.stringify(starObj));
        input.value = "";
        showTodo()
        showDonrTasks()
    }
});


function showTodo() {
    let todos = localStorage.getItem("todos");
    let starItem = localStorage.getItem("starItem");
    if (todos == null) {
        todosObj = [];
        starObj = [];
    }
    else {
        todosObj = JSON.parse(todos);
        starObj = JSON.parse(starItem);
    }

    let html = "";

    todosObj.forEach(function (element, index) {
        if (!starObj[index]) {



            html += `
        <div class="task">
            <div class="b">
                <span id="${index}"onclick="doneTask(this.id)" class="bt-tick">&#10004</span>
                <span class="bt-bull">&#8226</span>
            
            </div>
            <div class="task-text">
            ${element}
            </div>
        </div>
                `;

        }
    });



    let todoArea = document.getElementById("list");
    if (todosObj.length != null) {
        todoArea.innerHTML = html;
    } else {
        todoArea.innerHTML = `You dont creat any note yet`;
    }

}

function showDonrTasks() {
    let todos = localStorage.getItem("todos");
    let starItem = localStorage.getItem("starItem");
    if (todos == null) {
        todosObj = [];
        starObj = [];
    }
    else {
        todosObj = JSON.parse(todos);
        starObj = JSON.parse(starItem);
    }
    let html = "";
    var count = 0;
    todosObj.forEach(function (element, index) {
        if (starObj[index]) {



            html += `
        <div class="task">
            <div class="b">
                <span id="${index}"onclick="doneTask(this.id)" class="bt-tick">&#10004</span>
                <span class="bt-bull">&#8226</span>
            
            </div>
            <div class="task-text">
            ${element}
            </div>
        </div>
                `;
            count++
        }
    });


    let todoArea = document.getElementById("list-done");
    if (count != 0) {
        todoArea.innerHTML = html;
    } else {
        todoArea.innerHTML = ``;
    }
}

function doneTask(index) {
    let todos = localStorage.getItem("todos");
    let starItem = localStorage.getItem("starItem");
    if (todos == null) {
        todosObj = [];
        starObj = [];
    }
    else {
        todosObj = JSON.parse(todos);
        starObj = JSON.parse(starItem);
    }

    // starObj = starObj.reverse();
    if (starObj[index]) {
        starObj[index] = 0;
    }
    else {
        starObj[index] = 1;
    }
    // starObj = starObj.reverse();
    localStorage.setItem("starItem", JSON.stringify(starObj));

    showTodo()
    showDonrTasks()
}




let delbtn = document.getElementById("delbtn");
delbtn.addEventListener("click", function (e) {
    console.log("delete-btn")
    let todos = localStorage.getItem("todos");
    let starItem = localStorage.getItem("starItem");
    if (todos == null) {
        todosObj = [];
        starObj = [];
    }
    else {
        todosObj = JSON.parse(todos);
        starObj = JSON.parse(starItem);
    }

    let arr = []

    todosObj.forEach(function (element, index) {
        if (starObj[index]) {
            arr.push(index)


        }
    });
    arr.reverse()
    arr.forEach(function (element, index) {
        todosObj.splice(element, 1)
        starObj.splice(element, 1)

    });



    localStorage.setItem("todos", JSON.stringify(todosObj));
    localStorage.setItem("starItem", JSON.stringify(starObj));


    showTodo()
    showDonrTasks()
})