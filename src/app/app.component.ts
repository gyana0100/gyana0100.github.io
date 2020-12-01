import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
// import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spaceEXlaunch';
  yFilterArr = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  spaceData: any = [];
  baseUrl = '';
  focus = { yr: {}, lh: {}, ld: {} };
  filterObj = { year: '', launch: '', land: '' };
  constructor(private http: HttpClient, ) { }
  ngOnInit(): void {
    this.baseUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
    this.getApiCall(this.baseUrl);
  }
  urlMaker(key, id): void {
    this.focus[key] = {};
    this.focus[key][id] = true;
    let url = this.baseUrl;
    if (this.filterObj.launch !== '') { url = url + '&launch_success=' + this.filterObj.launch; }
    if (this.filterObj.land !== '') { url = url + '&land_success=' + this.filterObj.land; }
    if (this.filterObj.year !== '') { url = url + '&launch_year=' + this.filterObj.year; }
    this.getApiCall(url);
  }
  getApiCall(url): any {
    this.http.get(url).subscribe(result => {
      console.log(result);
      this.spaceData = result;
    });
  }
}
