import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { ThrowStmt } from '@angular/compiler';
import { AuthConstants } from 'src/app/config/auth-constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  postData = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private router: Router,
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService) { }

  ngOnInit() {
  }

  validateInput() {
    let username = this.postData.username.trim();
    let password = this.postData.password.trim();
    let email = this.postData.email.trim();

    return (
      this.postData.username && this.postData.password && this.postData.email && 
      username.length > 0 && password.length > 0 && email.length > 0
      );
  }

  signup() {
    if (this.validateInput()) {
      this.authService.signup(this.postData).subscribe(
        (res: any) => {
          if (res.userData) {
            //Store usre data
            this.storageService
            .store(AuthConstants.AUTH, res.userData)
            .then(res => {
              this.router.navigate(['home/feed']);
            });
          } else {
            this.toastService.presentToast(
              'Data already exists, please enter new details'
            );
          }
        }, 
        (error: any) => {
          this.toastService.presentToast('Network Issues.');
        }
      );
    } else {
      this.toastService.presentToast (
        'Please enter email, username or password.'
      )
    }
  }

}
