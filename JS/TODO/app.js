const todo = [];

let action = prompt("What do you want to do? ").toLowerCase();

while(action !== "quit"){
    
    if(action === "new"){
        let newTodo = prompt("What item do you want to add? ");
        todo.push(newTodo);
    } else if(action === "list"){
        if(todo.length === 0){ 
            console.log("THE LIST IS EMPTY!")
        }
        else{
            console.log("********")
            for (let i = 0; i < todo.length; i++){
                console.log(`${i + 1}: ${todo[i]}`)
            }
            console.log("********")}
    } else if(action === "delete"){
        let deleteAll = prompt("Do you want to delete all? ")
        if (deleteAll === "yes"){
            while(todo.length > 0){
                todo.pop()
            }
        }else if (deleteAll === "no"){
            let deleteItem = parseInt(prompt("Which item do you want to delete? (number in 'list') "))-1
            todo.splice(deleteItem,1)
        }
    }
    action = prompt("What do you want to do? ").toLowerCase();

}
console.log("App has been quit!")