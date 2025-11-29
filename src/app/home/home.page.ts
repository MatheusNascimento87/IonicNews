import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf, NgFor, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonButton,
    IonSelect,
    IonSelectOption,
    FormsModule,
    CommonModule,
    NgIf,
    NgFor,
    DecimalPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  amount = 1;
  fromCurrency = 'USD';
  toCurrency = 'BRL';
  result: number | null = null;

  currencies = ['USD', 'BRL', 'EUR', 'GBP', 'JPY'];

  constructor(private http: HttpClient) {}

  convertCurrency() {
    const url = `https://api.exchangerate-api.com/v4/latest/${this.fromCurrency}`;

    this.http.get<any>(url).subscribe({
      next: ({ rates }) => {
        this.result = this.amount * rates[this.toCurrency];
      },
      error: (err) => console.error('Error fetching exchange rates:', err)
    });
  }
}
