import {Component, OnInit} from '@angular/core';
import {MemberService} from "../../service/member.service";

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css']
})
export class MemberCreateComponent implements OnInit {

  constructor(private memberService: MemberService) {
  }

  ngOnInit(): void {
  }

}
