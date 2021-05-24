import { Component} from '@angular/core';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';
import { ItemPhoto } from './models/ItemPhoto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title="LandingLSD";
  //Icon in the nav bar
  faSquareFull  = faSquareFull ;
  constructor(){     
  }
  //method that trigger the animation to desplay the hamburguer menu 
  transitionF(){
     let navLink = document.querySelector(".nav-links");
     navLink?.classList.toggle('open');
  }
}
