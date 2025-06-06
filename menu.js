
const menu = [
    { nome: "Margherita", ingredienti: "Pomodoro, mozzarella, basilico", prezzo: 6.00 },
    { nome: "Diavola", ingredienti: "Pomodoro, mozzarella, salame piccante", prezzo: 7.50 },
    { nome: "Quattro Stagioni", ingredienti: "Pomodoro, mozzarella, funghi, prosciutto, carciofi", prezzo: 8.00 },
    { nome: "Capricciosa", ingredienti: "Pomodoro, mozzarella, prosciutto, olive, carciofi", prezzo: 7.80 },
    { nome: "Bufala", ingredienti: "Pomodoro, mozzarella di bufala, basilico", prezzo: 8.50 }
  ];
 
function popolaCard() {
    const pizzaCards = document.querySelectorAll('.pizza-card');
  

    pizzaCards.forEach((card, index) => {
    
      if (index < menu.length) {
        const pizza = menu[index];
      
        card.querySelector('.pizza-name').innerText = pizza.nome;
       
        card.querySelector('.pizza-description').innerText = `Ingredienti: ${pizza.ingredienti} | Prezzo: € ${pizza.prezzo.toFixed(2)}`;
      }
    });
  }
  
  
  window.onload = popolaCard;
 
  document.getElementById("vediMenuBtn").addEventListener("click", function() {
    const container = document.getElementById("menuContainer");
  
   
    if (container.style.display === "none" || container.innerHTML === "") {
      container.style.display = "block";
      
  
    
      menu.forEach(pizza => {
        const item = document.createElement("div");
        item.classList.add("pizza-item");
  
        item.innerHTML = `
          <h3>${pizza.nome}</h3>
          <p><strong>Ingredienti:</strong> ${pizza.ingredienti}</p>
          <p><strong>Prezzo:</strong> € ${pizza.prezzo.toFixed(2)}</p>
        `;
  
        container.appendChild(item);
      });
  
      
      this.disabled = true;
      this.innerText = "Nascondi Menù";


      
    }
  });
  