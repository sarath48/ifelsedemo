import { Component } from '@angular/core';
import { FetchBalanceService } from '../fetch-balance.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.scss',
})
export class TransactionHistoryComponent {
  transaction_history: any[] = [];
  constructor(private fetchService: FetchBalanceService) {}
  ngOnInit() {
    this.fetchService.fetchAllDetails().subscribe((data: any) => {
      this.transaction_history = data.transactions;
      this.transaction_history = this.transaction_history.map((data: any) => {
        return {
          ...data,
          date: new Date(data.date).toLocaleDateString(),
          time: new Date(data.date).toLocaleTimeString(),
        };
      });
    });
  }

  determineStatus(status: string): string {
    if (status === 'Success') {
      return 'green';
    } else if (status === 'Pending') {
      return 'yellow';
    } else {
      return 'red';
    }
  }
}
