import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';

  loadedFeature:any='Recipe';
  
  onSelected(select:HTMLInputElement)
  {

this.loadedFeature=select;
console.log(this.loadedFeature);
  }


}
