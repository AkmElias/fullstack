import { Component, OnInit } from "@angular/core";

import { TokenStorageService } from "../../_services/token-storage.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  roles: string[] = [];
  constructor(private token: TokenStorageService) {}

  ngOnInit() {
    if (this.token.getToken()) {
      this.roles = this.token.getUser().roles;
      console.log(`${this.roles}`);
    }
    this.currentUser = this.token.getUser();
  }
}
