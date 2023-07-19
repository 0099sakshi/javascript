const ul=document.querySelector('.items');
ul.firstElementChild.textContent='Hello';
ul.children[1].innerHTML='brad';
ul.lastElementChild.innerHTML='<h1>HELLO</h1>';
ul.background.color='green';
const btn = document.querySelector('btn');
btn.style.background.color='yellow';

//mouse event
btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
  });