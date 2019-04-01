import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Currency} from '../../interfaces/currency';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private http: HttpClient) {
  }

  public getCurrenciesNamesList(): Observable<string[]> {
    return this.http.get<Currency[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .pipe(
        map((data: Currency[]) => data.map((value: Currency) => value.cc))
      );
  }

  public getCurrencyByName(currencyName: string): Observable<Currency> {
    return this.http.get<Currency[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .pipe(
        map((data: Currency[]) => data.find((value: Currency) => value.cc === currencyName))
      );
  }

}

