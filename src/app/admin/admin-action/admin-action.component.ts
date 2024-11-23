import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../service/admin.service";

@Component({
  selector: 'app-admin-action',
  templateUrl: './admin-action.component.html',
  styleUrls: ['./admin-action.component.css']
})
export class AdminActionComponent implements OnInit {

  constructor(adminService: AdminService) {
  }

  ngOnInit(): void {
  }

}
