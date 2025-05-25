setTimeout(() => {
   document.getElementById('subscribe-modal').style.display = 'block';
}, 5000);

function accept() {
   alert('Дякуємо за підписку!');
   document.getElementById('subscribe-modal').style.display = 'none';
}
function decline() {
   document.getElementById('subscribe-modal').style.display = 'none';
}

