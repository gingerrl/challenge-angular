import { Component } from '@angular/core';
import { ListCard } from 'src/app/models/data-list.models';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent {
  constructor() {

  }

  dataList: ListCard[] = [
    {
      id: "trj-crd",
      name: "Tarjetas de Credito",
      description: "",
      logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      date_release: "2023-02-01T00:00:00.000+00:00",
      date_revision: "2024-02-01T00:00:00.000+00:00"
    },
    {
      id: "trj-crd2",
      name: "Tarjetas de Credito dos",
      description: "tarjeta dos",
      logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      date_release: "2023-02-02T00:00:00.000+00:00",
      date_revision: "2024-02-02T00:00:00.000+00:00"
    },
    {
      id: "trj-crd3",
      name: "Tarjetas de Credito tres",
      description: "tarjeta tres",
      logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      date_release: "2023-02-03T00:00:00.000+00:00",
      date_revision: "2024-02-03T00:00:00.000+00:00"
    },
    {
      id: "trj-crd4",
      name: "Tarjetas de Credito cuatro",
      description: "tarjeta cuatro",
      logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      date_release: "2023-02-04T00:00:00.000+00:00",
      date_revision: "2024-02-04T00:00:00.000+00:00"
    },
    {
      id: "trj-crd5",
      name: "Tarjetas de Credito cinco",
      description: "tarjeta cinco",
      logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      date_release: "2023-02-05T00:00:00.000+00:00",
      date_revision: "2024-02-05T00:00:00.000+00:00"
    }
  ]

}
