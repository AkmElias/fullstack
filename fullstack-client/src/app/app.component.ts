import { Component, OnInit } from "@angular/core";

import { TokenStorageService } from "./_services/token-storage.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "fullstack-client";
  private roles: string[];
  isLoggedIn = false;
  showAdmin = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) {}
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdmin = this.roles.includes("ROLE_ADMIN");

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
