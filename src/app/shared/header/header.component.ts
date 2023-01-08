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
  private SIguienteScroll = 1;
  HeaderStyle(){
    var scrollActual = window.scrollY;
    var header = document.getElementById('header');
    console.log(scrollActual);
    
    if (scrollActual > 0) {
      console.log("Actual: "+scrollActual);
      console.log("Siguiente: "+this.SIguienteScroll);
      
      if (scrollActual > this.SIguienteScroll) {
        header?.classList.add('header_esconder');
      } 
      else if (scrollActual > this.SIguienteScroll){
        header?.classList.remove('header_mostrar');
        header?.classList.remove('header_esconder');
      }
      else {
        header?.classList.remove('header_esconder');
        header?.classList.add('header_mostrar');
      }
      this.SIguienteScroll = scrollActual;
    } else {
        header?.classList.remove('header_mostrar');
        document.documentElement.scrollTop = 0;
    }
  }
}