import { UserService } from './user.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private auth:AuthService,route:Router,private userservice:UserService){
   
  auth.user$.subscribe(user=>{
    if(!user) return;
    userservice.save(user);
    
    let returnUrl=localStorage.getItem('returnUrl');
    if(!returnUrl) return;

    localStorage.removeItem('returnUrl');
    route.navigateByUrl(returnUrl);
  });

 }
}
