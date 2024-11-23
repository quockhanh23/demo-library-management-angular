import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";

const API_URL = environment.apiUrl + "/admins";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) {
  }

  changeStatusMember(idMember: any, status: any): Observable<Object> {
    return this.httpClient.get<Object>(API_URL + `/change-status?idMember=${idMember}&status=${status}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
      }
    });
  }

  getAllMember(): Observable<Object[]> {
    return this.httpClient.get<Object[]>(API_URL + `/get-all-members`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
      }
    });
  }
}
