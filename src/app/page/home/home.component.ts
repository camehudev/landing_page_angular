import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Mockup do PDV
  pdvItems = [
    { name: "Caderno 96 fls", qty: 2, price: 18.9 },
    { name: "Caneta azul (cx)", qty: 1, price: 24.5 },
    { name: "Marca-texto", qty: 3, price: 5.9 },
    { name: "Cola bastão", qty: 1, price: 7.2 }
  ];

  get pdvTotal() {
    return this.pdvItems.reduce((acc, item) => acc + (item.qty * item.price), 0);
  }

  formatCurrency(value: number) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  // Estado do Formulário de Leads
  lead = {
    name: '',
    email: '',
    whatsapp: '',
    business_type: ''
  };

  status: 'idle' | 'loading' | 'done' | 'error' = 'idle';
  errors: Record<string, string> = {};

  onSubmit() {
    this.errors = {};
    
    if (!this.lead.name || this.lead.name.trim().length < 2) {
      this.errors['name'] = 'Informe seu nome';
    }
    if (!this.lead.email || !this.lead.email.includes('@')) {
      this.errors['email'] = 'E-mail inválido';
    }
    if (!this.lead.whatsapp || this.lead.whatsapp.trim().length < 10) {
      this.errors['whatsapp'] = 'WhatsApp inválido';
    }
    if (!this.lead.business_type) {
      this.errors['business_type'] = 'Selecione o tipo de comércio';
    }

    if (Object.keys(this.errors).length > 0) return;

    this.status = 'loading';

    // Simulação de envio
    setTimeout(() => {
      this.status = 'done';
    }, 1000);
  }

  currentYear = new Date().getFullYear();
}