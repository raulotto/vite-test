async function readUsers(){
    try {
        const request = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await request.json();
        return data;
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Se acabo');
        setTimeout(removeLoader, 3000);
    }
}

async function myUsers(){
    try {
        const data = await readUsers();
        let namesContainer = document.getElementById('namesContainer');
        let lista = document.createElement('ul');
        lista.classList.add('lista');

        data.forEach(user => {
            let elementLista = document.createElement('li');
            elementLista.classList.add('elementList');
            elementLista.textContent = user.name;
            namesContainer.appendChild(elementLista);
        });
    } catch(error) {
    }
}

function printLoader(){
    let loader = document.createElement('div');
    loader.textContent = 'Cargando...';
    loader.classList.add('loader');
    document.body.appendChild(loader); 
}

function removeLoader() {
    let loader = document.querySelector('.loader');
    if (loader) {
        loader.remove();
    }
}

myUsers();