import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CardFormService } from '../../services/card-form.service';
import { RouterTestingModule } from '@angular/router/testing'
import { CardFormComponent } from './card-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ListCard } from '../../models/data-list.models';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const data: ListCard[] = [{
  id: "",
  name: "registro",
  description: "",
  logo: "",
  date_release: "",
  date_revision: ""

}]

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
        FormsModule,
        HttpClientTestingModule
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


  it('should method onButtonSend', async () => {
    jest.spyOn(router, 'navigate').mockImplementation()
    const update = await jest.spyOn(service, 'updateProduct')
    component.isCreate = false
    component.onButtonSend();
    expect(update).toHaveBeenCalled()
  });

  it('should method onButtonSend', async () => {
    jest.spyOn(router, 'navigate').mockImplementation()
    const verification = await jest.spyOn(service, 'verificationProduct').mockReturnValueOnce(of(false))
    component.isCreate = true
    component.onButtonSend();
    expect(verification).toHaveBeenCalled();
  });

  it('should method onListAdd', () => {
    const navigate = jest.spyOn(router, 'navigate').mockImplementation()
    const value = false
    const spy = jest.spyOn(service, 'addProduct').mockReturnValueOnce(of(data))
    component.onListAdd(value)
    expect(spy).toHaveBeenCalled()
    expect(navigate).toHaveBeenCalledWith(['/home']);

  });

  it('should method onListUpdate', () => {
    const navigate = jest.spyOn(router, 'navigate').mockImplementation()
    component.isCreate = false
    const spy = jest.spyOn(service, 'updateProduct').mockReturnValueOnce(of(data))
    component.onListUpdate()
    expect(spy).toHaveBeenCalled()
    expect(navigate).toHaveBeenCalledWith(['/home']);

  });

  it('should method handleRestart', () => {
    component.onButtonReset()
    expect(component.form.controls['id'].value).toBe(null)
  });

  it('should method goBack', () => {
    const navigate = jest.spyOn(router, 'navigate').mockImplementation()
    component.goBack()
    expect(navigate).toHaveBeenCalledWith(['/home']);
  });


});
