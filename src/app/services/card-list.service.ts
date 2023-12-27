import { Injectable } from "@angular/core"
import { Endpoints } from "../config/endpoints.enum";
import axios from "axios";
@Injectable({
    providedIn: 'root'
})
export class CardListService {

    constructor() {

    }

    async getLists() {
        const response = await axios.get(`${Endpoints.URL}`, { headers: { 'authorId': '931475503' } })
        return response.data
    }

    async delete(id: string) {
        const response = await axios.delete(`${Endpoints.URL}`, { params: { 'id': id }, headers: { 'authorId': '931475503' } })
        return response
    }
}