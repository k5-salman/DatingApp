import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }
  
  ngOnInit(): void {

  }


  login() {
    this.accountService.login(this.model).subscribe({
      next: _ => {
        this.router.navigate(['/members'])
        this.toastr.success("Login successful!");
    }
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['/']);
  }

}
