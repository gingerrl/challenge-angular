import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'
import { CardListService } from './card-list.service';
import { Endpoints } from '../config/endpoints.enum';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { ListCard } from '../models/data-list.models';

const data: ListCard[] = [{
  id: "",
  name: "",
  description: "",
  logo: "",
  date_release: "",
  date_revision: ""

}]
describe('CardListService', () => {
  let service: CardListService;
  let router: Router
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [CardListService]
    })
  });


  beforeEach(() => {
    service = TestBed.inject(CardListService);
    router = TestBed.inject(Router);
    httpMock = TestBed.inject(HttpTestingController)

  })

  afterEach(() => {
    httpMock.verify()
  })


  it('should create', () => {
    expect(service).toBeTruthy();
  });


  it('method getLists', () => {
    service.getLists().subscribe((response) => {
      expect(response).toBe(data)
    })
    const request: TestRequest = httpMock.expectOne(`${Endpoints.URL}`)
    request.flush(data)
  })

  it('method delete', () => {
    const id = ''
    service.delete(id).subscribe((data) => {
      expect(data).toEqual('Product successfully removed')
    })
    const request: TestRequest = httpMock.expectOne(`${Endpoints.URL}?id=${id}`)
    request.flush('Product successfully removed')

  })
});
