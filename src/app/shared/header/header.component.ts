import { Component,OnInit,AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewInit {
  // Detectar el scroll en pantalla
  @HostListener('window:scroll', ['$event']) onScrollEvent($event:any){
    this.HeaderStyle();
  } 
  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    
  }

  // Modifica el estilo del header segun el scroll 
  HeaderStyle(){
    var scrollActual = document.documentElement.scrollTop;
    var SIguienteScroll = 0;
    console.log(scroll);

    var header = document.getElementById('header');
    
    if (scrollActual > 1) {
      if (scrollActual > SIguienteScroll) {
        header?.classList.remove('header--scroll-down');
        header?.classList.add('header--scroll-up');
      } else {
        header?.classList.add('header--scroll-down');
        header?.classList.remove('header--scroll-up');
      }

      SIguienteScroll = scrollActual;
    } else {
      header?.classList.remove('header--scroll-up');
    }
  }

  // Otro(){
  //   const header = document.getElementById('header');
  //     var lastScrollY = 0;

  //     var currentScrollY = document.documentElement.scrollTop;
  //     console.log(currentScrollY);
    
  //     if (currentScrollY > 1) {
  //       if (currentScrollY > lastScrollY) {
  //         header?.classList.remove('header--scroll-down');
  //         header?.classList.add('header--scroll-up');
  //       } else {
  //         header?.classList.add('header--scroll-down');
  //         header?.classList.remove('header--scroll-up');
  //       }

  //         lastScrollY = currentScrollY;
  //     } else {
  //       header?.classList.remove('header--scroll-up');
  //       //header?.classList.remove('header--scroll-down');

  //     }
  // }
}
