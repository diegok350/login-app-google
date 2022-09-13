import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../model/user';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  user = new User();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getStateUser().subscribe(
      res => {
        this.user.displayName = res?.displayName!;
        this.user.email = res?.email!;
        this.user.emailVerified = res?.emailVerified!;
        this.user.photoURL = res?.photoURL!;
      }
    )
  }

  logOut(){
    this.authService.logOut().then(()=>{
      this.router.navigate(['/auth/login']);
    });
  }

}
