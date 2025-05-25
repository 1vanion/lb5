const cards = [
   {
      title: 'Туз Червовий ♥',
      suit: 'cherva',
      image: '/LB5/foto/A_ch.jpg',
      description: 'Це червовий туз. Символ любові та пристрасті.'
   },
   {
      title: 'Туз Бубновий ♦',
      suit: 'buba',
      image: '/LB5/Foto/A_b.png',
      description: 'Це бубновий туз. Символ багатства.'
   },
   {
      title: 'Туз Трефовий ♣',
      suit: 'trefa',
      image: '/LB5/Foto/A_h.png',
      description: 'Це трефовий туз. Символ сили та дії.'
   },
   {
      title: 'Туз Піковий ♠',
      suit: 'pika',
      image: '/LB5/Foto/A_p.jpg',
      description: 'Це піковий туз. Символ влади та змін.'
   },
   {
      title: 'Король Бубновий♦',
      suit: 'buba',
      image: '/LB5/Foto/k_b.png',
      description: '123'
   },
   {
      title: 'Король Піковий ♠',
      suit: 'pika',
      image: '/LB5/Foto/k_p.png',
      description: '123'
   },
   {
      title: 'Король Червовий ♥',
      suit: 'cherva',
      image: '/LB5/Foto/k_ch.png',
      description: '123'
   },
   {
      title: 'Король Трефовий ♣',
      suit: 'trefa',
      image: '/LB5/Foto/k_h.png',
      description: '123'
   }


];

window.onload = function () {
   const container = document.getElementById('card-container');
   cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.dataset.suit = card.suit;

      cardElement.innerHTML = `
          <img src="${card.image}" alt="${card.title}" loading="lazy" />
          <h2>${card.title}</h2>
          <p class="card-description">${card.description}</p>
          <button onclick="toggleDescription(this)">Показати опис</button>
        `;

      container.appendChild(cardElement);
   });
};

function toggleDescription(button) {
   const description = button.previousElementSibling;
   const isVisible = description.style.display === 'block';
   description.style.display = isVisible ? 'none' : 'block';
   button.textContent = isVisible ? 'Показати опис' : 'Сховати опис';
}

function filterCards(suit, button) {
   const cards = document.querySelectorAll('.card');
   cards.forEach(card => {
      card.style.display = (suit === 'all' || card.dataset.suit === suit) ? 'block' : 'none';
   });

   document.querySelectorAll('#filter-panel button').forEach(btn => btn.classList.remove('active'));
   button.classList.add('active');
}