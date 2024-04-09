import { Injectable } from "@angular/core"
import { Endpoints } from "../config/endpoints.enum";
import { HttpClient } from "@angular/common/http";
import { VARIABLE } from "../utils/constants";
import { Observable } from "rxjs";
import { ListCard } from "../models/data-list.models";
@Injectable({
    providedIn: 'root'
})
export class CardListService {

    constructor(
        private http: HttpClient
    ) {
    }

    getLists(): Observable<ListCard[]> {
        return this.http.get<ListCard[]>(`${Endpoints.URL}`, { headers: { 'authorId': VARIABLE.ID_AUTHOR } })
    }

    delete(id: string) {
        return this.http.delete(`${Endpoints.URL}`, { params: { 'id': id }, responseType: "text", headers: { 'authorId': VARIABLE.ID_AUTHOR } })
    }
}