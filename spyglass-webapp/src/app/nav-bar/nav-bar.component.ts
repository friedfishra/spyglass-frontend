import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private router: Router) { }

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
  }

}
