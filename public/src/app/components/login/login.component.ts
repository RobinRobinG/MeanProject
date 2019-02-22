import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: NgFlashMessageService,
    private fb: FormBuilder,
    ) {
      this.loginForm = this.fb.group({
        email: '',
        password: '',
      });
    }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = this.loginForm.value;
    this.authService.authenticateUser(user).subscribe((data: any) => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.showFlashMessage({
          messages: ['You are now logged in!'],
          dismissible: true,
          timeout: 3000,
          type: 'success'
        });
        this.router.navigate(['dashboard']);
      } else {
        this.flashMessage.showFlashMessage({
          messages: Array.of(data.msg),
          dismissible: true,
          timeout: 3000,
          type: 'danger'
        });
        this.router.navigate(['login']);
      }
    });
  }
}
