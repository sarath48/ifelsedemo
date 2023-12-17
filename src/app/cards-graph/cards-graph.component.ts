import { Component, OnInit } from '@angular/core';
import { FetchBalanceService } from '../fetch-balance.service';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-cards-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-graph.component.html',
  styleUrl: './cards-graph.component.scss',
})
export class CardsGraphComponent implements OnInit {
  moneyStatics: any[] = [];
  chart!: any;

  constructor(private fetchService: FetchBalanceService) {}

  ngOnInit(): void {
    this.fetchService.fetchAllDetails().subscribe((data: any) => {
      for (let key in data.money_statistics) {
        if (data.money_statistics.hasOwnProperty(key)) {
          this.moneyStatics.push({ key, ...data.money_statistics[key] });
        }
      }
    });

    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Income',
            data: [
              '467',
              '576',
              '572',
              '79',
              '92',
              '574',
              '573',
              '576',
              '572',
              '79',
              '92',
              '443',
            ],
          },
          {
            label: 'Investment',
            data: [
              '542',
              '542',
              '536',
              '327',
              '17',
              '0.00',
              '538',
              '541',
              '536',
              '327',
              '17',
              '32',
            ],
          },

          {
            label: 'Expense',
            data: [
              '542',
              '542',
              '536',
              '327',
              '17',
              '0.00',
              '538',
              '541',
              '536',
              '327',
              '17',
              '345',
            ],
          },
        ],
      },

      options: {
        aspectRatio: 2.5,
      },
    });
  }

  determineColor(trend: number): string {
    if (trend === 32) {
      return 'green';
    } else if (trend === 12) {
      return 'orange';
    } else {
      return 'yellow';
    }
  }
}
