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


  it('should method onButtonEdit', () => {
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
    component.onButtonEdit(item)
    expect(navigate).toHaveBeenCalledWith(['/form'], navigationData);
  });


  it('should method onButtonDelete', () => {
    const item: ListCard = {
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    }
    component.showModalDelete = true
    component.onButtonDelete(item)
    expect(component.selectList).toBe(item);
  });


  it('should method onCloseModal', () => {
    component.onCloseModal()
    expect(component.showModalDelete).toBeFalsy();
  });

  it('should method onConfirm', () => {
    component.onConfirm()
    expect(component.showModalDelete).toBeFalsy();
  });
});
