import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], // Fixed the key to styleUrls
})
export class DashboardComponent implements OnInit {
  quoteList: any[] = []; // Explicitly typed as an array of objects

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getDetails(); // Fetch quotes on initialization
  }

  getDetails() {
    this.api.getQuoteDetailsAPI().subscribe(
      (res: any) => {
        console.log(res);
        // Handle the case where the response is a single object or an array
        if (Array.isArray(res)) {
          this.quoteList = res;
        } else {
          this.quoteList = [res]; // Wrap single object in an array
        }
      },
      (error) => {
        console.error('Error fetching quotes:', error);
      }
    );
  }
}
