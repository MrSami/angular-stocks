import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../services/stocks/stocks.service';

@Component({
  selector: 'stock-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})

export class ManagerComponent implements OnInit {

  symbols : Array<string>;
  stock : string;

  constructor(private service: StocksService) {
    this.symbols = service.get();
   }
   
   add () {
     this.symbols = this.service.add(this.stock.toUpperCase());
     this.stock = '';
   }
   
   remove(symbol){
     this.symbols = this.service.remove(symbol);
   }

  ngOnInit(): void {
  }

}
