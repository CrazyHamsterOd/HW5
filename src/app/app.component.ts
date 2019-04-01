import {Component} from '@angular/core';
import {ExchangeService} from './services/exchange/exchange.service';
import {Currency} from './interfaces/currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private result = 0;
  private currency: string;

  constructor(private exchangeService: ExchangeService) {
  }

  private changeCurrency(value: string): void {
    this.currency = value;
  }

  private calc(value: string): void {
    this.exchangeService.getCurrencyByName(this.currency)
      .subscribe((data: Currency) => {
        if (data) {
          this.result = +value * data.rate;
        }
      });
  }
}


