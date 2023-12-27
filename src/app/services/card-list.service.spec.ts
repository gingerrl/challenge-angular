import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'
import { CardListService } from './card-list.service';
import axios from 'axios';
import { Endpoints } from '../config/endpoints.enum';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('CardListService', () => {
  let service: CardListService;
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [CardListService]
    })
  });


  beforeEach(() => {
    service = TestBed.inject(CardListService);
    router = TestBed.inject(Router);

  })

  it('should create', () => {
    expect(service).toBeTruthy();
  });


  it('method getLists', async () => {
    const data = [{
      id: "tarjeta1",
      name: "Tarjeta credito 1",
      description: "registro1jj",
      logo: "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      date_release: "2023-12-12T00:00:00.000+00:00",
      date_revision: "2023-12-13T00:00:00.000+00:00"

    }]
    mockedAxios.get.mockImplementation(() => Promise.resolve(data))
    await service.getLists()
    axios.get(`${Endpoints.URL}`, { headers: { 'authorId': '931475503' } }).then((response) => {
      expect(response).toEqual(data)

    })

  })



  it('method delete', async () => {
    const data = "Product successfully removed"
    mockedAxios.delete.mockImplementation(() => Promise.resolve(data))
    const id = 'tarjeta1'
    await service.delete(id)
    axios.delete(`${Endpoints.URL}`, { params: { 'id': id }, headers: { 'authorId': '931475503' } }).then((response) => {
      expect(response).toEqual(data)

    })

  })
});
