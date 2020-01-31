import { Component } from '@angular/core';

import{XlsServiceService} from './xls-service.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'XlsFileGenreate';

  listdetails
 
 



  constructor(
      
     private excelservice:XlsServiceService
   

  )
  {

  }

  ngOnInit()
  {
    
      
   this.Getdetails()
  }


  Getdetails(){
    
  this.excelservice.Getdata().subscribe(check=>
    {
      this.listdetails=check.Cardetails


    });
  }
  

Exportelx()
{

  this.excelservice.exportAsExcelFile( this.listdetails,"Carinformation")
}
}

  
 

