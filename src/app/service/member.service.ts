import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Member} from "../models/member";
import {Observable} from "rxjs";

const API_URL = environment.apiUrl + "/members";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClient: HttpClient) {
  }

  createMember(member: Member): Observable<Member> {
    return this.httpClient.post<Member>(API_URL + `/add-new-member`, member, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
      }
    });
  }

  getDetailMember(memberId: any): Observable<Member> {
    return this.httpClient.get<Member>(API_URL + `/get-one?memberId=${memberId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
      }
    });
  }
}
