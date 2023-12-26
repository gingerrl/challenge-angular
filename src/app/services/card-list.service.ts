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
        console.log("data", response.data)
        return response.data
    }
}