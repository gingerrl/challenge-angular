import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'
import axios from 'axios';
import { Endpoints } from '../config/endpoints.enum';
import { CardFormService } from './card-form.service';
import { ListCard } from '../models/data-list.models';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('CardFormService', () => {
  let service: CardFormService;
  let router: Router

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [CardFormService]
    })

  });


  beforeEach(() => {
    service = TestBed.inject(CardFormService);
    router = TestBed.inject(Router);
  })

  it('should create', () => {
    expect(service).toBeTruthy();
  });


  it('method verificationProduct', async () => {
    const id = 'tarjeta1'
    mockedAxios.get.mockImplementation(() => Promise.resolve(false))

    await service.verificationProduct(id)
    axios.get(`${Endpoints.URL}`, { params: { 'id': id }, headers: { 'authorId': '931475503' } }).then((response) => {
      expect(response).toBeFalsy()
    })
  })


  it('method addProduct', async () => {

    const body: ListCard[] = [{
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    }]
    mockedAxios.post.mockImplementation(() => Promise.resolve(body))

    await service.addProduct(body)
    axios.post(`${Endpoints.URL}`, body, { headers: { 'authorId': '931475503' } }).then((response) => {
      expect(response).toEqual(body)
    })
  })


  it('method updateProduct', async () => {

    const body: ListCard[] = [{
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    }]
    mockedAxios.put.mockImplementation(() => Promise.resolve(body))

    await service.updateProduct(body)
    axios.put(`${Endpoints.URL}`, body, { headers: { 'authorId': '931475503' } }).then((response) => {
      expect(response).toEqual(body)
    })
  })
});
