window.addEventListener('DOMContentLoaded', () => {
   const modal = document.getElementById('modal');
   const closeBtn = document.getElementById('closeBtn');
   const timer = document.getElementById('timer');


   setTimeout(() => {
      modal.style.display = 'flex';
      setTimeout(() => {
         modal.classList.add('show');
      }, 10);

      let countdown = 5;
      timer.textContent = `Можна закрити через ${countdown} секунд`;

      const interval = setInterval(() => {
         countdown--;
         if (countdown > 0) {
            timer.textContent = `Можна закрити через ${countdown} секунд`;
         } else {
            clearInterval(interval);
            closeBtn.disabled = false;
            closeBtn.classList.add('active');
            timer.textContent = 'Можна закрити';
         }
      }, 1000);

      closeBtn.addEventListener('click', () => {
         if (!closeBtn.disabled) {
            modal.classList.remove('show');
            setTimeout(() => {
               modal.style.display = 'none';
            }, 500);
         }
      });

   }, 15000);
});