const  list = ['Practica de Javascript','Ir al supermercado','Pasear al perro','Lavar los trastos']

const lista = document.getElementById('Lista');

const form = document.createElement('form');
lista.appendChild(form);

const ul = document.createElement('ul');
form.appendChild(ul);

for(let i = 0; i < list.length; i++){
    const li = document.createElement('li');
    ul.appendChild(li);

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.setAttribute('id', `tarea-${i}`);

    const label = document.createElement('label');
    label.setAttribute('for', `tarea-${i}`);
    label.innerHTML = list[i];

    li.appendChild(checkbox);
    li.appendChild(label);
}

