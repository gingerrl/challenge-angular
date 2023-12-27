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
        try {
            const response = await axios.post(`${Endpoints.URL}`, body, { headers: { 'authorId': '931475503' } })
            return response.data
        } catch (error) {
            alert("Error vuelva a intentar")
        }
    }

    async verificationProduct(id: string) {
        try {
            const response = await axios.get(`${Endpoints.VERIFICATION}`, { params: { 'id': id }, headers: { 'authorId': '931475503' } })
            return response.data
        } catch (error) {
            alert("Error vuelva a intentar")
        }

    }

    async updateProduct(body: ListCard[]) {
        try {
            const response = await axios.put(`${Endpoints.URL}`, body, { headers: { 'authorId': '931475503' } })
            return response.data
        } catch (error) {
            alert("Error vuelva a intentar")
        }

    }
}