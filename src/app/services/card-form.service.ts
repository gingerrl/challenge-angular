import { Injectable } from "@angular/core"
import { ListCard } from "../models/data-list.models"
import { Endpoints } from "../config/endpoints.enum";
import { HttpClient } from "@angular/common/http";
import { VARIABLE } from "../utils/constants";
@Injectable({
    providedIn: 'root'
})
export class CardFormService {
    constructor(
        private http: HttpClient

    ) { }

    addProduct(body: ListCard[]) {
        return this.http.post(`${Endpoints.URL}`, body, { headers: { 'authorId': VARIABLE.ID_AUTHOR } })
    }

    verificationProduct(id: string) {
        return this.http.get<boolean>(`${Endpoints.VERIFICATION}`, { params: { 'id': id }, headers: { 'authorId': VARIABLE.ID_AUTHOR } })
    }

    updateProduct(body: ListCard[]) {
        return this.http.put(`${Endpoints.URL}`, body, { headers: { 'authorId': VARIABLE.ID_AUTHOR } })
    }
}