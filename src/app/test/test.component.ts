import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  public allUsers$?: Observable<any>;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.allUsers$ = this.authService.getAllUsers();
  }
}
