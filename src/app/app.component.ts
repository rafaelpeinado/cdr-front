import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'cdr-front';
  public allUsers$?: Observable<any>;

  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.allUsers$ = this.authService.getAllUsers();
  }
}
