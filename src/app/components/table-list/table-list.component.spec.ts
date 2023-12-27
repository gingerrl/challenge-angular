import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { TableListComponent } from './table-list.component';
import { ListCard } from '../../models/data-list.models';

describe('TableListComponent', () => {
  let component: TableListComponent;
  let fixture: ComponentFixture<TableListComponent>;
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableListComponent],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should method handleSelect', () => {
  //   const event = 5
  //   const data = [{
  //     id: "tarjeta1",
  //     name: "Tarjeta credito 1",
  //     description: "registro1jj",
  //     logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
  //     date_release: "2023-12-12T00:00:00.000+00:00",
  //     date_revision: "2023-12-13T00:00:00.000+00:00"

  //   }]
  //   component.handleSelect(event)
  //   expect(component.listFilter).toEqual(data.slice(0,event));
  // });


  it('should method handleEdit', () => {
    const navigate = jest.spyOn(router, 'navigate').mockImplementation()

    const item: ListCard = {
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    }
    const navigationData = {
      state: {
        item
      }
    }
    component.handleEdit(item)
    expect(navigate).toHaveBeenCalledWith(['/form'], navigationData);
  });


  it('should method handleDelete', () => {
    const item: ListCard = {
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    }
    component.showModalDelete = true
    component.handleDelete(item)
    expect(component.selectList).toBe(item);
  });


  it('should method handleCloseModal', () => {
    component.handleCloseModal()
    expect(component.showModalDelete).toBeFalsy();
  });

  it('should method handleConfirm', () => {
    component.handleConfirm()
    expect(component.showModalDelete).toBeFalsy();
  });
});
