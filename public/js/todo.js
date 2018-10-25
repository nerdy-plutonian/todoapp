getPosts();

async function getPosts(){
    
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => {
        let output = `<h1 class="display-1">Your list</h1>`;
        data.forEach(function(todo){
            console.log(todo);
            output += `
            <div class="card">
            <div class="card-body">
            <h4 class="card-title">${todo.title}</h4>
            <p class="card-text">${todo.completed}</p>
            </div>
            </div>
            <br>
            `
        });
        document.getElementById('content').innerHTML = output;
    });
}