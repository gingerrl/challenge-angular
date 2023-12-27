import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CardFormService } from '../../services/card-form.service';
import { RouterTestingModule } from '@angular/router/testing'
import { CardFormComponent } from './card-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CardFormComponent', () => {
  let component: CardFormComponent;
  let fixture: ComponentFixture<CardFormComponent>;
  let service: CardFormService
  let router: Router


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFormComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        CardFormService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardFormComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CardFormService);
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should method handleSend', async () => {
     jest.spyOn(router, 'navigate').mockImplementation()
    const update = await jest.spyOn(service, 'updateProduct').mockImplementation()
    component.isCreate = false
    component.handleSend();
    expect(update).toHaveBeenCalled()
  });

  it('should method handleSend', async () => {
    jest.spyOn(router, 'navigate').mockImplementation()
    const verification = await jest.spyOn(service, 'verificationProduct').mockImplementation(() => Promise.resolve(false))
    component.isCreate = true
    component.handleSend();
    expect(verification).toHaveBeenCalled();
  });

  it('should method handleRestart', () => {
    component.handleRestart()
    expect(component.form.controls['id'].value).toBe(null)
  });
});
