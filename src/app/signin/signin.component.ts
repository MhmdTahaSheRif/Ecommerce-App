import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/interfaces/userdetails';
import { AuthService } from '../auth.service';
import { GlobalstateService } from '../globalstate.service';

@Component({
  selector: 'app-auth',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SignInComponent implements OnInit, OnDestroy {

  myForm!: FormGroup;
  errorMessage: string | null = null;
  currentUser: UserDetails | undefined;
  buttonClicked: boolean = false;

  constructor(private auth: AuthService, private formBuilder: FormBuilder, private router: Router, private globalState: GlobalstateService) {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$')]]
    });
  }

  ngOnInit(): void {
    this.globalState.currentUserSubscription.subscribe(res => {
      this.currentUser = res;
    });
    this.globalState.updateHeaderSwitch(false);
  }

  ngOnDestroy(): void {
    this.globalState.updateHeaderSwitch(true);
  }
  onsubmit(): void {
    this.auth.signIn(this.myForm.value).subscribe((res) => {
      console.log(res);
      localStorage.setItem('token', res.tokenJwt);
      localStorage.setItem('Idtoken', res.tokenId);
      this.auth.getCurrentUser().subscribe(res => {
        this.currentUser = res;
        this.globalState.updateCurrentUser(res);
      });
      this.router.navigate(['']);
    }, (error) => {
      if (error.error.code === 'UserNotConfirmedException') {
        this.errorMessage = "Please verify your account first";
      } else if (error.error.code === 'NotAuthorizedException') {
        this.errorMessage = "Please check email/password";
        this.buttonClicked = false; 
      }
      console.error('Error occurred while:', error);
    });
  }


  errorGone(): void {
    this.errorMessage = null;
  }

  onContinueClicked(): void {
    this.buttonClicked = true;
    if (this.myForm.valid) {
      this.onsubmit();
    }}
}
