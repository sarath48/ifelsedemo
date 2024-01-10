import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { CardBalanceComponent } from './card-balance/card-balance.component';
import { CardsGraphComponent } from './cards-graph/cards-graph.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { StaticColumnComponent } from './static-column/static-column.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchBalanceService } from './fetch-balance.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    OverviewComponent,
    CardBalanceComponent,
    CardsGraphComponent,
    SideNavComponent,
    StaticColumnComponent,
    HttpClientModule,
    TransactionHistoryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ifelsedemo';
  apiResponse!: any;
  constructor(private fetchAllDetails: FetchBalanceService) {}
  ngOnInit(): void {
    this.fetchAllDetails.fetchAllDetails().subscribe((res) => {
      this.apiResponse = res;
      this.apiResponse.transactions = this.apiResponse.transactions?.map(
        (data: any) => {
          return {
            ...data,
            date: new Date(data.date).toLocaleDateString(),
            time: new Date(data.date).toLocaleTimeString(),
          };
        }
      );
      this.apiResponse.moneyStatistics = [];
      for (let key in this.apiResponse.money_statistics) {
        if (this.apiResponse.money_statistics.hasOwnProperty(key)) {
          this.apiResponse.moneyStatistics.push({
            key,
            ...this.apiResponse.money_statistics[key],
          });
        }
      }
    });
  }
}
