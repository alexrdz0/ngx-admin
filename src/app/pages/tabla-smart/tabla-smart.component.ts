import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Datos } from "../../models/datos";

@Component({
  selector: "ngx-tabla-smart",
  template: `
    <input
      #search
      class="search"
      type="text"
      placeholder="Search..."
      (keydown.enter)="onSearch(search.value)"
    />
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `,
  templateUrl: "./tabla-smart.component.html",
  styleUrls: ["./tabla-smart.component.scss"],
})
export class TablaSmartComponent {
  settings = {
    columns: {
      nuc: {
        title: "NUC",
      },
      departamento: {
        title: "Departamento",
      },
      Status: {
        title: "Status",
      },
    },
  };

  source: LocalDataSource;

  datos: Datos[] = [];
  constructor() {
    this.source = new LocalDataSource(this.datos);
  }

  onSearch(query: string = "") {
    this.source.setFilter(
      [
        {
          field: "nuc",
          search: query,
        },
        {
          field: "departamento",
          search: query,
        },
      ],
      false
    );
  }
}
