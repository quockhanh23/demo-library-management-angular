import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TestService} from "../services/test.service";
import {Test} from "../models/test";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  test?: Test
  response?: Response

  testForm = new FormGroup({
    phone: new FormControl(''),
    fullName: new FormControl(''),
  });

  constructor(private testService: TestService) {
  }

  ngOnInit(): void {
  }

  calculate() {
    this.testService.adminAction(1, 1).subscribe(rs => {
      this.test = rs
    })
  }

}
