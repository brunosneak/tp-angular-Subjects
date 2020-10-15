import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { NavService } from "../shared/nav.service";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit, OnDestroy {
	constructor(private navService: NavService) {}

	myNavServiceSubscription: Subscription;

	myMenuOpen: number = 0;
	myMenuClosed: number = 0;
	navData: boolean;

	ngOnInit(): void {
		this.myNavServiceSubscription = this.navService.navObs.subscribe((x) => {
			if (this.navData !== x && !x) {
				this.myMenuOpen++;
			} else if (this.navData !== x && x) {
				this.myMenuClosed++;
			}
			this.navData = x;
		});
	}
	ngOnDestroy(): void {
		this.myNavServiceSubscription.unsubscribe();
	}
}
