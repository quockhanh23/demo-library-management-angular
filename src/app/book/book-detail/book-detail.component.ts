import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(bookService: BookService) {
  }

  ngOnInit(): void {
  }

}
