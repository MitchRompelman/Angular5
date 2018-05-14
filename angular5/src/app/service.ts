import { Injectable } from '@angular/core';

@injectable();

// Testing my injectable
export class Service {
	search(search) {
		console.log('Example @injectable, you searched for: ' + search)
	}
}
