import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private validateService: ValidateService,
    private flashMessage: NgFlashMessageService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    ) {
      this.registerForm = this.fb.group({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      });
    }

  ngOnInit() {
  }
  onRegisterSubmit() {
    const newuser = this.registerForm.value;
    if (!this.validateService.validateRegister(newuser)) {
      this.flashMessage.showFlashMessage({
        messages: ['Please fill in all the fields!'],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });
      return false;
    }
    if (!this.validateService.validateEmail(newuser.email)) {
      this.flashMessage.showFlashMessage({
        messages: ['Please use a valid email!'],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });
      return false;
    }
    this.authService.registerUser(newuser).subscribe((data: any) => {
        if (data.success) {
          this.flashMessage.showFlashMessage({
            messages: ['You are now registered!'],
            dismissible: true,
            timeout: 3000,
            type: 'success'
          });
          this.router.navigate(['login']);
        } else {
          this.flashMessage.showFlashMessage({
            messages: ['Something went wrong'],
            dismissible: true,
            timeout: 3000,
            type: 'danger'
          });
          this.router.navigate(['register']);
        }
      });
  }
}
