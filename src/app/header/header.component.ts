import { Component } from "@angular/core";
import { NavService } from "../shared/nav.service";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	constructor(private navService: NavService) {}

	closed() {
		this.navService.closeNav();
	}
}
