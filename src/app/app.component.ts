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
  yFilterArr = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];
  spaceData: any = [];
  baseUrl = '';
  constructor(private http: HttpClient, ) { }
  ngOnInit(): void {
    this.baseUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
    this.getApiCall(this.baseUrl);
  }
  urlMaker(year, launch, land): void {
    let url = this.baseUrl;
    if (launch !== undefined) { url = url + '&launch_success=' + launch; }
    if (land !== undefined) { url = url + '&land_success=' + land; }
    if (year !== undefined) { url = url + '&launch_year=' + year; }
    this.getApiCall(url);
  }
  getApiCall(url): any {
    this.http.get(url).subscribe(result => {
      console.log(result);
      this.spaceData = result;
    });
  }
}
