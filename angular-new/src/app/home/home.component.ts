import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
RegForm:FormGroup;
subButton =false
  constructor( private FormBuilder:FormBuilder  , private route: Router) { 
    this.RegForm= this.FormBuilder.group({
      userName:['', [Validators.required] ],
      password:['' ,[Validators.required]],
      gender:['', [Validators.required]],
      checkbox:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  subFun(){
    this.subButton=true;
    if(this.RegForm.valid){
      console.log(this.RegForm.value)
      this.route.navigate(['/product']);
    }
  }

  get f(){
    return this.RegForm.controls
  }

}
