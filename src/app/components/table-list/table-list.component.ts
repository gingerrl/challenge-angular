import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ListCard } from 'src/app/models/data-list.models';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit, OnChanges {
  @Input() dataList: ListCard[] = [];
  @Output() listEvent = new EventEmitter()

  listFilter: ListCard[] = []
  showModalDelete = false
  selectList: ListCard = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: '',
  }
  constructor(
    private router: Router,

  ) { }
  ngOnInit(): void {
  }

  handleSelect(e: any) {
    this.listFilter = this.dataList.slice(0, e.target.value)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.listFilter = changes?.['dataList'].currentValue.slice(0, 5)
  }
  handleEdit(item: ListCard) {
    const navigationData: NavigationExtras = {
      state: {
        item
      }
    }
    this.router.navigate(['/form'], navigationData)
  }
  handleDelete(item: ListCard) {
    this.selectList = item
    this.showModalDelete = true
  }

  handleCloseModal() {
    this.showModalDelete = false

  }
  handleConfirm() {
    this.showModalDelete = false;
    this.listEvent.emit()
  }
}
