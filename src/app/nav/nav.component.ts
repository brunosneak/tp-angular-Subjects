import { Component } from "@angular/core";
import { NavService } from "../shared/nav.service";

@Component({
	selector: "app-nav",
	templateUrl: "./nav.component.html",
	styleUrls: ["./nav.component.scss"],
})
export class NavComponent {
	constructor(private navService: NavService) {}

	ngOnInit() {}

	toggleNav() {
		this.navService.toggleNav();
	}
}
