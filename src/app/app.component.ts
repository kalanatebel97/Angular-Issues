import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  public commencementDate:any;
  public expirationDate :any;
  public noOfdays:any;


  compsForm: FormGroup = new FormGroup({
    leaseCommencement: new FormControl('', Validators.required),
    leaseExpiration: new FormControl('', Validators.required),
    term: new FormControl(''),
  });

  commencementEvent(event: any){
    let date = event.target.value;
    this.commencementDate = new Date(date);
  }
  
  expirationEvent(event: any){
  
  let date =  event.target.value;
  this.expirationDate = new Date(date);  
  
  var time = this.expirationDate.getTime() - this.commencementDate.getTime(); 
  var days = time / (1000 * 3600 * 24); //Diference in Days

  if(days && days >= 0){
    this.noOfdays = days;
  }else{
      this.noOfdays = null;
  }
}

saveComp(value: any): void {
  console.log(value);
}

cancel():void {
  console.log("cancel");
}

}



