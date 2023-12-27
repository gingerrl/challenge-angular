import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CardListService } from '../../services/card-list.service';
import { RouterTestingModule } from '@angular/router/testing'
import { MainViewComponent } from './main-view.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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

  it('should method handleAdd', () => {
    const navigate = jest.spyOn(router, 'navigate').mockImplementation()
    component.handleAdd()
    expect(navigate).toHaveBeenCalledWith(['/form']);
  });


  it('method getCardList', async () => {
    const data = [{
      id: "tarjeta1",
      name: "Tarjeta credito 1",
      description: "registro1jj",
      logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      date_release: "2023-12-12T00:00:00.000+00:00",
      date_revision: "2023-12-13T00:00:00.000+00:00"

    }]
    const list = jest.spyOn(service, 'getLists').mockImplementation(() => Promise.resolve(data))
    component.dataList = data
    component.dataListFilter = data
    await component.getCardList()
    expect(list).toHaveBeenCalled()
  })

});
