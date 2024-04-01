import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListCard } from '../../models/data-list.models';
import { CardListService } from '../../services/card-list.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  dataList: ListCard[] = []
  dataListFilter: ListCard[] = [];
  isLoading: boolean = false;
  constructor(
    private cardList: CardListService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.getCardList()
  }

  handleAdd() {
    this.router.navigate(['/form'])
  }

  async getCardList() {
    this.isLoading = true
    this.cardList.getLists().then((data) => {
      this.isLoading = false
      this.dataList = data
      this.dataListFilter = data
    })
  }

  handleSearch(e: any) {
    if (e.target.value.trim() === '') {
      this.dataListFilter = this.dataList
    } else {
      this.dataListFilter = this.dataList.filter(x => x.name.toLowerCase().includes(e.target.value.toLowerCase())
        || x.description.toLowerCase().includes(e.target.value.toLowerCase()))
    }
  }
}
