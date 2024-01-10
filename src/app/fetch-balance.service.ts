import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchBalanceService {
  constructor(private http: HttpClient) {}
  apiResponse!: any;
  fetchAllDetails() {
    return this.http.get('https://1.api.fy23ey06.careers.ifelsecloud.com/');
  }
}
