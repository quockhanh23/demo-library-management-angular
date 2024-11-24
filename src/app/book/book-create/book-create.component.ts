import {Component, OnInit} from '@angular/core';
import {BookService} from "../../service/book.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  bookForm: FormGroup = this.formBuilder.group({
    title: new FormControl(''),
    author: new FormControl(''),
    publisher: new FormControl(''),
  });

  constructor(private bookService: BookService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  createBook() {
    let book = {
      title: this.bookForm.value.title,
      author: this.bookForm.value.author,
      publisher: this.bookForm.value.publisher,
    }
    this.bookService.createBook(book).subscribe(() => {

    })
  }
}
