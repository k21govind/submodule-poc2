import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-test-2';
  value:number=15;

  onClick(event:any){
    
    alert(this.value)

  }
}
