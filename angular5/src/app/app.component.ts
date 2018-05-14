// Import core
import { Component, OnInit, AfterViewInit, ViewChild,Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Service } from './service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';



// Import my custom Itext.
import { IText } from './itext';

import @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit { 
	
	dt = new Date();
	// Application main title
	title = 'My first Angular5 project';
	
	//
	_title: string;
	_added: Array<any> = new Array<any>();
	
	// Search part
	_search: 'demo';
	_searched:  false;
	_result: '';
	_foundtext: '';
	_searchresult: '';
	
	_index: number;
	_data_text: '';

	// The textarry for the sidebar.
	textarray: Array<IText> = [
		{make: 'This is the demo added text!' }
	];

	constructor(private _http: HttpClient, private _service: Service) {}

	// Button add function
	onAdd() {
	const requestBody = {
		title: this._title || 'Unspecified',
	};

	// Post data and filter using httpClient
	this._http.post("http://jsonplaceholder.typicode.com/posts", requestBody).subscribe(
			res => {
				this.textarray.push({make: res['title'] })
			}
		) 
	} 

	// Delete function searches the textarray for matching content.
	deleteText(texti: Itext) {
	  _data_text = texti.make;
	  _index = this.textarray.findIndex(obj => obj['make'] === data_text))
	  this.textarray.splice(index, 1); 
	}
	
	// Search function
	doSearch() {
		this._service.search(this._search)
		// Search textarray get the index, 
		//@TODO: need some time to loop and search more results and push it in a results array
		this._searchresult = this.textarray.findIndex(x => x['make'].lastIndexOf(this._search) > -1); // true
		this._searched = true;
		// @RESULTS
		if(this._searchresult > -1) {
			// Result found
			this._result = this._search;
			this._foundtext = this.textarray[this._searchresult].make
		} else {
			// Result not found
			this._result = '';
			this._foundtext = '';
		}
	}  
	
}

