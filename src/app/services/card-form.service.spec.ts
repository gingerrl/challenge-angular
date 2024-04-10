import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'
import { Endpoints } from '../config/endpoints.enum';
import { CardFormService } from './card-form.service';
import { ListCard } from '../models/data-list.models';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

describe('CardFormService', () => {
  let service: CardFormService;
  let router: Router;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [CardFormService]
    })

  });


  beforeEach(() => {
    service = TestBed.inject(CardFormService);
    router = TestBed.inject(Router);
    httpMock = TestBed.inject(HttpTestingController)
  })

  afterEach(() => {
    httpMock.verify()
  })

  it('should create', () => {
    expect(service).toBeTruthy();
  });


  it('method verificationProduct', () => {

    const id = 'reg1'
    service.verificationProduct(id).subscribe((resp) => {
      expect(resp).toBeFalsy()
    })
    const request: TestRequest = httpMock.expectOne(`${Endpoints.VERIFICATION}?id=${id}`)
    request.flush(false)
  })

  it('method addProduct', () => {
    const body: ListCard[] = [{
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    }]
    service.addProduct(body).subscribe(() => {
      expect(request.request.method).toBe('POST')
    })
    const request:TestRequest = httpMock.expectOne(`${Endpoints.URL}`)
  })

  it('method updateProduct', () => {
    const body: ListCard[] = [{
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    }]
    service.updateProduct(body).subscribe(() => {
      expect(request.request.method).toBe('PUT')
    })
    const request:TestRequest = httpMock.expectOne(`${Endpoints.URL}`)

  })
});
