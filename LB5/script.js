function filterCards(suit) {
   const cards = document.querySelectorAll('.card');
   cards.forEach(card => {
      if (suit === 'all' || card.dataset.suit === suit) {
         card.style.display = 'block';
      } else {
         card.style.display = 'none';
      }
   });

}
