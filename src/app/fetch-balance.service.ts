import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchBalanceService {
  apiResponse: any;
  constructor(private http: HttpClient) {
    this.apiResponse = this.http.get(
      'https://1.api.fy23ey06.careers.ifelsecloud.com/'
    );
  }

  fetchAllDetails() {
    return this.apiResponse;
  }
}
