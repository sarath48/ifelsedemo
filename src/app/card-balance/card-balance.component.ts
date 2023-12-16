import { Component } from '@angular/core';
import { FetchBalanceService } from '../fetch-balance.service';

@Component({
  selector: 'app-card-balance',
  standalone: true,
  imports: [],
  templateUrl: './card-balance.component.html',
  styleUrl: './card-balance.component.scss',
})
export class CardBalanceComponent {
  balance: any;
  constructor(private fetchService: FetchBalanceService) {
    this.fetchService
      .fetchAllDetails()
      .subscribe((data: any) => (this.balance = data.balance.total_balance));
  }
}
