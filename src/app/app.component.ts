import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  userForm:FormGroup
  
  //submitted=false;
  constructor(private formBuilder:FormBuilder){

  }
  ngOnInit(){
    this.userForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
    
   


    
    

  }
  // get f() { return this.userForm.controls; }
  // convenience getter for easy access to form fields
  user:any={};

  onSubmit():void{
    
    console.log(this.userForm.value)
    this.user=Object.assign(this.user,this.userForm.value);
    localStorage.setItem('token', JSON.stringify (this.user));
      
    
    

  }
 
  
}
