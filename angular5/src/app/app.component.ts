// Import core
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

// Import the httpClient
import { HttpClient } from '@angular/common/http';

import
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynasource Angular5';
  _title: string;
  _body: string;
  _added: Array<any> = new Array<any>();
  
  constructor(private _http: HttpClient) {}
  
  // Button add function
  onAdd() {
	const requestBody = {
		title: this._title || 'Unspecified',
		body: this._body || 'Unspecified',
	};
	
	// Post data and filter
	this._http.post("http://jsonplaceholder.typicode.com/posts", requestBody).subscribe(
		res => {
			this._added.push(res)
		}
	)
  }
  
}
