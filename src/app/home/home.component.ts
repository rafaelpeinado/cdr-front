import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AuthService } from '../shared/services/auth.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, AsyncPipe,
    MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public isAuthenticated: boolean = false;
  public matches: boolean = true;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((breakpointState: BreakpointState) => this.matches = breakpointState.matches);
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
