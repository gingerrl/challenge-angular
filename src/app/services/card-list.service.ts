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
        try {
            const response = await axios.get(`${Endpoints.URL}`, { headers: { 'authorId': '931475503' } })
            return response.data
        } catch (error) {
            alert("Error vuelva a intentar")
        }
    }

    async delete(id: string) {
        try {
            const response = await axios.delete(`${Endpoints.URL}`, { params: { 'id': id }, headers: { 'authorId': '931475503' } })
            return response.data
        } catch (error) {
            alert("Error vuelva a intentar")
        }
    }
}