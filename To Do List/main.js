let addButton = document.querySelector('.add');

addButton.addEventListener("click", function() {
    const wrapper = document.createElement('div');
    wrapper.className += 'todoitem';

    let checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.addEventListener('change', function() {
        if( checkBox.checked ) {
            checkBox.parentNode.remove();
        }
    });
    
    

    let label = document.createElement('label');
    label.appendChild(document.createTextNode(document.getElementById('todotext').value));

    wrapper.appendChild(checkBox);
    wrapper.appendChild(label);
    wrapper.appendChild(document.createElement('hr'));

    document.querySelector('.list').append(wrapper);
    document.getElementById('todotext').value = '';
});