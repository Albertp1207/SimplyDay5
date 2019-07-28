function deleteTodo(index) {
    fetch("/todos",{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method:"DELETE",
        body:JSON.stringify({index}),
    }).then((res)=>{
        if(res.status === 200) {
            window.location.href = '/todos'
        }
    })
}
function editTodo(e,index) {
    const body = {
        todoText: e.target.childNodes[0].value,
        index
    }
    e.preventDefault();

    fetch("/todos",{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method:"PUT",
        body:JSON.stringify(body),
    }).then((res)=>{
        if(res.status === 200) {
            window.location.href = '/'
        } else {
            console.error("change text")
        }
    })
}