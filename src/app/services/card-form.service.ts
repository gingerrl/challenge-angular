import { Injectable } from "@angular/core"
import { ListCard } from "../models/data-list.models"
import { Endpoints } from "../config/endpoints.enum";
import axios from "axios";
@Injectable({
    providedIn: 'root'
})
export class CardFormService {
    constructor() { }

    async addProduct(body: ListCard[]) {
        const response = await axios.post(`${Endpoints.URL}`, body, { headers: { 'authorId': '931475503' } })
        return response.data
    }

    async verificationProduct(id: string) {
        const response = await axios.get(`${Endpoints.VERIFICATION}`, { params: { 'id': id }, headers: { 'authorId': '931475503' } })
        return response.data
    }
}