import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ListCard } from 'src/app/models/data-list.models';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit, OnChanges {
  @Input() dataList: ListCard[] = []

  listFilter: ListCard[] = []
  showModalDelete = false
  showModalEdit = false
  constructor(
    private router: Router

  ) { }
  ngOnInit(): void {
  }

  handleSelect(e: any) {
    this.listFilter = this.dataList.slice(0, e.target.value)
    console.log(e.target.value)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.listFilter = changes?.['dataList'].currentValue.slice(0, 5)
  }
  handleEdit() {
    this.showModalEdit = true
    this.router.navigate(['/form'])
  }
  handleDelete() {
    this.showModalDelete = true
  }
}
