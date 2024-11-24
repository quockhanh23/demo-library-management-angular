import {Component, OnInit} from '@angular/core';
import {BookService} from "../../service/book.service";
import {Book} from "../../models/book";
import {PageImpl} from "../../models/page-impl";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  page?: PageImpl
  books?: Book[]
  pageSize?: number = 0;
  currentPage?: number = 0;
  currentPageAddOne?: number = 1;
  previousPageNumber?: number = 1;
  currentNumber?: number = 2;
  nextPageNumber?: number = 3;
  checkAddBook = false;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getAllBook(0, 10);
  }

  getAllBook(page: any, size: any) {
    this.bookService.getAllBook(page, size).subscribe(rs => {
      this.page = rs
      this.currentPage = rs.page.number
      this.books = rs.content
    })
  }

  previousPage() {
    if (this.currentPage != null && this.currentPage > 0) {
      this.currentPage--;
      this.currentPageAddOne = this.currentPage + 1
      this.getAllBook(this.currentPage, 10);
      console.log("currentPage: " + this.currentPage)
      if (this.currentPage == 0 || this.currentPage == 1) {
        this.currentNumber = 2
        this.previousPageNumber = 1
        this.nextPageNumber = 3
      } else {
        this.currentNumber = this.currentPage + 1
        this.previousPageNumber = this.currentPage
        this.nextPageNumber = this.currentPage + 2
      }
    }
  }

  nextPage() {
    if (this.books == null || this.books.length == 0) return
    // @ts-ignore
    if (this.currentPage != null && (this.currentPage + 1) * this.pageSize < this.page?.page.totalElements) {
      this.currentPage++;
      this.currentPageAddOne = this.currentPage + 1
      this.getAllBook(this.currentPage, 10);
      this.currentNumber = this.currentPage + 1
      this.previousPageNumber = this.currentPage
      this.nextPageNumber = this.currentPage + 2
    }
  }

  addNewBook() {
    this.checkAddBook = true
  }
  closeAddNewBook() {
    this.checkAddBook = false
  }
}
