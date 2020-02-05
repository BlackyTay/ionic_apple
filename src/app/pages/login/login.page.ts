import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { AuthConstants } from 'src/app/config/auth-constants';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  postData = {
    username: '',
    password: ''
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService) { }

  ngOnInit() {
  }

  validateInputs() {
    let username = this.postData.username.trim();
    let password = this.postData.password.trim();

    return (
      this.postData.username && this.postData.password &&
      username.length > 0 && password.length > 0
    );
  }

  login(){
    if (this.validateInputs()) {
      this.authService.login(this.postData).subscribe(
        (res: any) => {
          if (res.userData) {
            //Storing user data
            this.storageService.store(AuthConstants.AUTH, res.userData);
            this.router.navigate(['home/feed']);
          } else {
            this.toastService.presentToast('incorrect password.');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    } else {
      this.toastService.presentToast('Please enter email/username or password');
    }
  }
}
