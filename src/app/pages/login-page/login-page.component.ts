import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public  login: string = '';
  public  password: string = '';

  public signIn() {
    if (this.login === 'admin' && this.password === 'admin') {

      console.log('You are logged in');
      return true;
    }
    console.log('You are not logged in');
    return false;
  }
  
}


