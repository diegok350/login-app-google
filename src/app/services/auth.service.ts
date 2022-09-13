import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router) { }

  // Sign in with google
  googleAuth() {
    return this.authLogin(new GoogleAuthProvider())
  }

  /**
   * The authLogin function takes a provider as a parameter, and returns a promise that resolves to the
   * result of the signInWithPopup function
   * @param {any} provider - This is the provider you want to authenticate with.
   * @returns The result of the login.
   */
  authLogin(provider: any) {
    return this.auth.signInWithPopup(provider).then(result => {
      console.log('success login', result);
      this.router.navigate(['/start']);
    }).catch((error) => {
      console.log(error);
    });
  }

  /**
   * The logOut function is an asynchronous function that calls the signOut function from the auth
   * service
   */
  async logOut() {
    this.auth.signOut();
  }

  /**
   * It returns the current state of the user
   * @returns The authState of the user.
   */
  getStateUser() {
    return this.auth.authState;
  }

}
