import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ExchangeService} from '../../services/exchange/exchange.service';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.css']
})
export class CurrencySelectComponent implements OnInit {
  private currenciesNamesList: string[];
  @Output() currency = new EventEmitter<string>();

  constructor(private exchangeService: ExchangeService) {
  }

  ngOnInit() {
    this.exchangeService.getCurrenciesNamesList().subscribe(data => this.currenciesNamesList = data);
  }

  private changeCurrency(value) {
    this.currency.emit(value);
  }

}
