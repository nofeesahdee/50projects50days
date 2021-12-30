document.querySelector('button').addEventListener('click', loadData);

function loadData(e){
    // Creat xml object
    const xhr = new XMLHttpRequest();

    // xhr open
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

    // xhr onload
    xhr.onload = function(){
        if (this.status === 200){

        }
    }

    // xhr send
    xhr.send();
    e.preventDefault()
}