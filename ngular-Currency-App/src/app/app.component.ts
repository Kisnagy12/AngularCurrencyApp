import { Component } from '@angular/core';
import { Portfolio } from './model/portfolio';
import { Money } from './model/money';
import { portfolioService } from './service/portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngular-Currency-App';

  constructor(public portfolio: portfolioService){}

  currency: string = 'HUF';
  amount: number = 0;

  Add(){
    const newMoney = new Money(this.amount, this.currency)
    this.portfolio.add([newMoney])
    this.currency = 'HUF'
    this.amount = 0
  }
}

