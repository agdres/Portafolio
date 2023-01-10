import { Component,OnInit,AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewInit {
  // Detectar el scroll en pantalla
  @HostListener('window:scroll', ['$event']) onScrollEvent($event:any){
    let width = window.innerWidth;
    let heigth = window.scrollY;
    //console.log(width);
   console.log(heigth);

    if(width <= 499){
      this.HeaderStyle(50);
    }
    else if (width <= 767 && width >= 481) {
      this.HeaderStyle(80);
    }else{
      this.HeaderStyle(110);
    }
    
  } 
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    
  }

  // Modifica el estilo del header segun el scroll 
  private SIguienteScroll = 0;
  HeaderStyle(scrollTop:number){
    
    var scrollActual = window.scrollY;
    var header = document.getElementById('header');
    
    if (scrollActual > scrollTop) {

      console.log("Actual: "+scrollActual);
      console.log("Siguiente: "+this.SIguienteScroll);
      
      if (scrollActual >= this.SIguienteScroll) {
        header?.classList.add('header--esconder');
        header?.classList.remove('header--mostrar');
      }
      else{
        header?.classList.add('header--mostrar');
        header?.classList.remove('header--esconder');
      }
        this.SIguienteScroll = scrollActual;
    } else {
      header?.classList.remove('header--esconder');
      header?.classList.remove('header--mostrar');
      this.SIguienteScroll = scrollTop;
        // document.documentElement.scrollTop = 0;
    }
  }




  descargar(){
    const link = document.createElement("a");
    link.href = 'assets/documents/CV.pdf';
    link.download = `CV_Andres_Martinez.pdf`;
    link.click();
  }
}