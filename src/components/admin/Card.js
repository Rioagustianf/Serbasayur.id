// src/components/Card.js
export function Card({ numbers, cardName, icon }) {
  return `
      <div class="card">
        <div>
          <div class="numbers">${numbers}</div>
          <div class="cardName">${cardName}</div>
        </div>
        <div class="iconBx">
          <ion-icon name="${icon}"></ion-icon>
        </div>
      </div>
    `;
}
