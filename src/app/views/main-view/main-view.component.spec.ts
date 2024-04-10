import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CardListService } from '../../services/card-list.service';
import { RouterTestingModule } from '@angular/router/testing'
import { MainViewComponent } from './main-view.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListCard } from '../../models/data-list.models';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const data: ListCard[] = [{
  id: "",
  name: "registro",
  description: "",
  logo: "",
  date_release: "",
  date_revision: ""

}]

describe('MainViewComponent', () => {
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;
  let service: CardListService
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainViewComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [CardListService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CardListService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should method onButtonAdd', () => {
    const navigate = jest.spyOn(router, 'navigate').mockImplementation()
    component.onButtonAdd()
    expect(navigate).toHaveBeenCalledWith(['/form']);
  });


  it('method onListProduct', () => {
    component.isLoading = true
    const list = jest.spyOn(service, 'getLists').mockReturnValueOnce(of(data))
    component.dataList = data
    component.dataListFilter = data
    component.onListProduct()
    expect(list).toHaveBeenCalled()
  })


  it('method onSearchProduct', () => {
    const event = {
      target: {
        value: ''
      }
    }
    component.onSearchProduct(event)
    expect(component.dataListFilter).toEqual(component.dataList)
  })

  it('method onSearchProduct', () => {
    const event = {
      target: {
        value: 'registro'
      }
    }
    component.dataList = data
    component.onSearchProduct(event)
    expect(component.dataListFilter.length).toBe(1)
  })
});
