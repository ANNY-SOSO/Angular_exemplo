// Importa o core do Angular, que permite criar componentes
import { Component } from '@angular/core';

// Importa a função que inicializa a aplicação Angular moderna
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root', // Define o seletor do componente (Angular Components)
  template: `
    <h2>Contador de Cliques</h2>
    <p>Valor atual: {{ count }}</p> <!-- Data binding do Angular para exibir o estado -->
    
    <!-- Eventos do Angular para interatividade -->
    <button (click)="incrementar()">➕ Incrementar</button>
    <button (click)="decrementar()">➖ Decrementar</button>
    <button (click)="reset()">🔄 Resetar</button>
  `
})
export class AppComponent {
  count = 0; // Estado local do componente (não usa NgRx, apenas Angular)

  // Função chamada pelo botão ➕
  increment() {
    this.count++; // Atualiza o estado local do componente
  }

  // Função chamada pelo botão ➖
  decrementar() {
    this.count--;
  }

  // Função chamada pelo botão 🔄
  reset() {
    this.count = 0;
  }
}

// Inicializa a aplicação Angular com o AppComponent
// Ferramenta usada: bootstrapApplication (Angular moderno)
bootstrapApplication(AppComponent);