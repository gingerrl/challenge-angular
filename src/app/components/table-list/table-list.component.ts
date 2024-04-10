import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ListCard } from '../../models/data-list.models';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit, OnChanges {
  @Input() dataList: ListCard[] = [];
  @Output() listEvent = new EventEmitter()

  listProduct: ListCard[] = []
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

  ngOnChanges(changes: SimpleChanges): void {
    this.listProduct = changes?.['dataList'].currentValue.slice(0, 5)
  }

  onDropDown(e: any) {
    this.listProduct = this.dataList.slice(0, e.target.value)
  }


  onButtonEdit(item: ListCard) {
    const navigationData: NavigationExtras = {
      state: {
        item
      }
    }
    this.router.navigate(['/form'], navigationData)
  }
  onButtonDelete(item: ListCard) {
    this.selectList = item
    this.showModalDelete = true
  }

  onCloseModal() {
    this.showModalDelete = false

  }
  onConfirm() {
    this.showModalDelete = false;
    this.listEvent.emit()
  }
}
