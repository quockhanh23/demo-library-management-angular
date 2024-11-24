import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../models/book";
import {environment} from "../../environments/environment.prod";
import {PageImpl} from "../models/page-impl";

const API_URL = environment.apiUrl + "/books";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {
  }

  createBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(API_URL + `/add-new-book`, book, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
      }
    });
  }

  getDetailBook(bookId: any): Observable<Book> {
    return this.httpClient.get<Book>(API_URL + `/get-one?bookId=${bookId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
      }
    });
  }

  getAllBook(page: number, size: number): Observable<PageImpl> {
    return this.httpClient.get<PageImpl>(API_URL + `/get-all-books?page=${page}&?size=${size}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
      }
    });
  }
}
