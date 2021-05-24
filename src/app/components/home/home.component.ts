import { Component, ComponentFactoryResolver, HostListener, OnInit } from '@angular/core';
import { trigger, style, transition, animate,state } from '@angular/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './home.service';
import { HttpClient } from '@angular/common/http';
import { ItemPhoto } from 'src/app/models/ItemPhoto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger("enterState",[
      state('void',style({
        transform: "translateY(-150%)",
        opacity: 0
      })),
      transition(":enter",[
        animate(2000,style({
          transform: "translateY(0)",
          opacity:1
        }))
      ]),
    ]),
    trigger("hovers",[      
      state("initial",style({
        transform: "translateY(0)",
        opacity: 1
      })),
      state("final",style({
        transform: "translateY(-27%)",
        opacity: 1
      })), 
      transition('initial <=> final',
      animate('0.5s ease-in'))
    ]),
    trigger("slide",[
      state("hide",style({
        transform: "translatex(-100%)",
        opacity: 0
      })),
      state("show",style({
        transform: "translateX(0)", 
        opacity: 1
      })),
      transition('hide => show', 
      animate('1.5s ease-in'))
    ]), 
    trigger("slide2",[
      state("hide",style({
        transform: "translatex(100%)",
        opacity: 0
      })),
      state("show",style({
        transform: "translateX(0)", 
        opacity: 1
      })),
      transition('hide => show', 
      animate('1.5s ease-in'))
    ])
    
    
  ],
})

export class HomeComponent implements OnInit {
  
  public mhovers:String="initial";
  public mhoversG:String="initial";
  public mhoversH:String="initial";
  public mSlide:String="hide";
  public mSlide2:String="hide";
  public mSlide3:String="hide";
  inAnimation=false;
  photo1=new ItemPhoto(
    "Fabry",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCkHBBy2HIzFqXmd0UrnJR65bYZw8cYmyfQ&usqp=CAU",
    "Encuentra toda la inforamcion relacionada con Fabry"
  );
  photo2=new ItemPhoto(
    "Gaucher",
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    "Encuentra toda la inforamcion relacionada con Fabry"
  );
  photo3=new ItemPhoto(
    "Hunter",
    "https://i.ytimg.com/vi/AUkqYvZ9tn0/maxresdefault.jpg",
    "Encuentra toda la inforamcion relacionada con Fabry"
  );
  photos:Array<ItemPhoto> = [this.photo1,this.photo2,this.photo3];

  clientid: string="13107394-cac0-40e6-9bf0-ae3099cae4c6";
  client_secret: string="B8XS5fGoS-VqzlDc3AOTXFa6lUzPj6Fu_D6A_DtHZAsW0MvR0gAveuHpG_qJAJylMQ8QpKT6yheNTA3_yz68-g";
  url: string = 'https://oauth.brightcove.com/v3/access_token';
  
  title = 'LandingLSD';
  public slides: String[]=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCkHBBy2HIzFqXmd0UrnJR65bYZw8cYmyfQ&usqp=CAU","https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg","https://i.ytimg.com/vi/AUkqYvZ9tn0/maxresdefault.jpg"];
  public interval1: number=4000; 
  varFalse=true;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  public animado:any=document.querySelectorAll(".animado");

  @HostListener("document:scroll")
  scrollFunction(){
    console.log("wdwdd");
    if(document.body.scrollTop>350|| document.documentElement.scrollTop>350){
      this.animarBottom();
    }
    if(document.body.scrollTop>380|| document.documentElement.scrollTop>380){
      this.animarBottom2();
    }
    if(document.body.scrollTop>410|| document.documentElement.scrollTop>410){
      this.animarBottom3();
    }
   
  }
 
  constructor(private homeService: HomeService) { 
    //this.inAnimation=true;
  }
  animar(){

    this.mhovers=this.mhovers === 'initial' ? 'final' : 'initial';
    
  }
  animarG(){

    this.mhoversG=this.mhoversG === 'initial' ? 'final' : 'initial';
    
  }
  animarH(){

    this.mhoversH=this.mhoversH === 'initial' ? 'final' : 'initial';

  }
  animarBottom(){
    this.mSlide='show';
  }
  animarBottom2(){
    this.mSlide2='show';
  }
  animarBottom3(){
    this.mSlide3='show';
  }
 
  scroll = (): void => {
    console.log("LOCCAAAA");
    
    let scrollTop = document.documentElement.scrollTop;
    for(var i =0;i<this.animado.length;i++){
      let alturaAnimado= this.animado[i].offsetTop;
      if(alturaAnimado -(alturaAnimado/2)<scrollTop){
        this.animado[i].style.opacity=1;

      }

    }
  };
 

  
  
  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
    this.homeService.getToken();
    //this.inAnimation=true;
    
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll, true);
  }

}
