import {Component, OnInit} from '@angular/core';
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  constructor(bookService: BookService) {
  }

  ngOnInit(): void {
  }

}
