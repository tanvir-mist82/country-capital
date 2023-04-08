const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => displayComments(data))
}

const displayComments = data => {
    const commentContainer = document.getElementById('comment-ul');
    for(const comments of data){
        // console.log(comments);
        const commentLi = document.createElement('li');
        commentLi.innerHTML = `
        <h5>ID: ${comments.id}</h5>
        <h3>Name: ${comments.name}</h3>
        <p>Email: ${comments.email}</p>
        <p>Body: ${comments.body}</p>
        `
        commentContainer.appendChild(commentLi);
    }
}
