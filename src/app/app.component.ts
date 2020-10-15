import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { NavService } from "./shared/nav.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
	constructor(public navService: NavService) {}
	myNavServiceSubscription: Subscription;

	navData: boolean;

	ngOnInit(): void {
		this.myNavServiceSubscription = this.navService.navObs.subscribe((x) => {
			this.navData = x;
		});
	}
	ngOnDestroy(): void {
		this.myNavServiceSubscription.unsubscribe();
	}
}
