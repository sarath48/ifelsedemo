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
          '2022-05-10',
          '2022-05-11',
          '2022-05-12',
          '2022-05-13',
          '2022-05-14',
          '2022-05-15',
          '2022-05-16',
          '2022-05-17',
        ],
        datasets: [
          {
            label: 'Sales',
            data: ['467', '576', '572', '79', '92', '574', '573', '576'],
            backgroundColor: 'blue',
          },
          {
            label: 'Profit',
            data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
            backgroundColor: 'limegreen',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
