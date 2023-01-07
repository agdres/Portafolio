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
  private SIguienteScroll = 0;
  HeaderStyle(){
    var scrollActual = window.scrollY;
    var header = document.getElementById('header');
    if (scrollActual > 50) {
      
      if (scrollActual > this.SIguienteScroll) {
        header?.classList.add('header_esconder');
        header?.classList.remove('header_mostrar');
      } else {
        header?.classList.remove('header_esconder');
        header?.classList.add('header_mostrar');
      }
      this.SIguienteScroll = scrollActual;
    } else {
        header?.classList.remove('header_mostrar');
    }
  }
}