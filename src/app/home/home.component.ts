import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housing-location";
import { HousingService } from "../housing.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" value="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results" *ngIf="housingLocations.length > 0; else noResults">
      <app-housing-location *ngFor="let item of housingLocations" [housingLocation]="item"></app-housing-location>
    </section>
    <ng-template #noResults>
      <section>No results found.</section>
    </ng-template>

  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingLocations: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingLocations = this.housingService.getAllHousingLocations();
  }

}
