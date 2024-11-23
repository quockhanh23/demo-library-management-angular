import {Component, OnInit} from '@angular/core';
import {MemberService} from "../../service/member.service";

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  constructor(private memberService: MemberService) {
  }

  ngOnInit(): void {
  }

}
