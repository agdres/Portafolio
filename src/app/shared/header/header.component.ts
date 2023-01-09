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
  private SIguienteScroll = 150;
  HeaderStyle(){
    
    var scrollActual = window.scrollY;
    var header = document.getElementById('header');
    
    if (scrollActual > 150) {
      header?.classList.remove('header_mostrar');
      header?.classList.remove('header_esconder');
      // console.log("Actual: "+scrollActual);
      // console.log("Siguiente: "+this.SIguienteScroll);
      
      if (scrollActual > this.SIguienteScroll) {
        header?.classList.add('header_esconder');
      } 
      else if (scrollActual > this.SIguienteScroll){
        header?.classList.remove('header_mostrar');
        header?.classList.remove('header_esconder');
      }
      else {
        header?.classList.add('header_mostrar');
      }
      this.SIguienteScroll = scrollActual;
    } else {
        header?.classList.remove('header_mostrar');
        // document.documentElement.scrollTop = 0;
        header?.classList.remove('header_mostrar');
        this.SIguienteScroll = 150
    }
  }


  descargar(){
    const link = document.createElement("a");
    link.href = 'assets/documents/CV.pdf';
    link.download = `CV_Andres_Martinez.pdf`;
    link.click();
  }
}