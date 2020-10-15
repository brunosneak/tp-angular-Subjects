import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class NavService {
	private isClosed: boolean = true;

	private navSubj = new ReplaySubject<any>(1);

	public navObs: Observable<boolean>;

	constructor() {
		this.navObs = this.navSubj.asObservable();
		this.navSubj.next(this.isClosed);
	}

	toggleNav() {
		this.isClosed = !this.isClosed;
		this.navSubj.next(this.isClosed);
	}

	closeNav() {
		this.isClosed = true;
		this.navSubj.next(this.isClosed);
	}
}
