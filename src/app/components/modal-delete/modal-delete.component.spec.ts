import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalDeleteComponent } from './modal-delete.component';
import { CardListService } from '../../services/card-list.service';

describe('ModalDeleteComponent', () => {
  let component: ModalDeleteComponent;
  let fixture: ComponentFixture<ModalDeleteComponent>;
  let service: CardListService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalDeleteComponent],
      imports: [],
      providers: [
        CardListService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ModalDeleteComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CardListService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should method handleConfirm', async () => {
    const onDelete = jest.spyOn(service, 'delete').mockImplementation()
     component.handleConfirm()
     await expect(onDelete).toHaveBeenCalled()
  });
});
