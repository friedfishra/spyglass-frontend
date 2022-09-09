import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] = [];
  helloUser: MenuItem[] = [];
  user: User;
  helloName: string;
  displayLoginModal: boolean = false;
  incorrectCreds: boolean = false;
  constructor(private router: Router, private userService: UserService) {
    this.user = new User();
    if(this.user.id === 0){
      this.helloName = 'Not Signed In';
    } else {
      this.helloName = 'Welcome ' + this.user.name;
    }
   }

  ngOnInit(): void {
    this.items = [
      {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => {
        this.router.navigate(['home']);
      }
      },
      { label: 'Goals',
        icon: 'pi pi-send',
        command: () => {
          this.router.navigate(['goals']);
        } 
      },
      {
        label: 'History',
        icon: 'pi pi-lock',
        command: () => {
          this.router.navigate(['history']);
         }
  }];

  this.helloUser = [
    {
      label: this.helloName,
      icon: 'pi pi-user',
      command: () => {
        this.displayLoginModal = true;
        console.log(this.displayLoginModal)
        
      }
    }
  ]

  }


  signIn() {
    
    this.displayLoginModal = false;
    this.user.name = 'Atul Mishra';
    this.helloName = this.user.name;
    this.userService.authenticateUser(this.user).subscribe(resp => {
      this.user = resp;
      
    });
    this.ngOnInit();
    
  }

  signOut() {
    this.displayLoginModal = false;
    this.helloName = 'Not Signed In';
    this.ngOnInit();
  }

  

}
