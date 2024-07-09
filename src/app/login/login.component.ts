import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe(result => {
        console.log('result', result);
      });

    this.formGroup = this.formBuilder.group({
      cpf: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public login(): void {
    this.authService.authenticate(this.formGroup.value)
      .subscribe({
        complete: () => this.router.navigate(['']),
        error: (error: any) => console.log('error', error),
      });
  }
}
