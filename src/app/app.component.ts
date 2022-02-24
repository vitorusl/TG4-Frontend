import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { DollarModel, ResponseDollarApiModel } from './dollar.model';
import { DollarService } from './dollar.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TG4';
  public dollarAtual!: DollarModel;
  

  constructor(private _dollarService: DollarService)
  {}

  ngOnInit(){
    this._dollarService.getDollarPrice().subscribe((response: ResponseDollarApiModel) => {
      this.dollarAtual = {
        high: response.USDBRL.high.substring(0, 4),
        create_date: response.USDBRL.create_date,
      } as DollarModel;
    });
  }
  
}
