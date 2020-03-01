import { Component} from '@angular/core';
import { StocksService, StockInterface } from './services/stocks/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  stocks: Array<StockInterface>;
  title = 'Stock Tracker';

  constructor(service : StocksService){
    service.load(['AAPL']).subscribe(stocks => {this.stocks = stocks});
  }
}
