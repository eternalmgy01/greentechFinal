import { Component, OnInit } from '@angular/core';
import {ComponentCanDeactivate} from '../../../guards/exit-login.guard';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor() { }

    // email: string;
    // password: any;

  ngOnInit(): void {
    // this.email = '';
    // this.password = '';
  }
  onSubmit(value: any){
    // if (this.email === 'sultan@asd' || this.password === 123){
    //   alert('Welcome');
    // }
    console.log(value);
  }


  // saved: boolean = false;
  // save(){
  //   this.saved = true;
  // }
  //
  // canDeactivate() : boolean | Observable<boolean>{
  //
  //   if (!this.saved){
  //     return confirm("Вы хотите покинуть страницу?");
  //   }
  //   else{
  //     return true;
  //   }
  // }
}
