import { Component, OnInit } from '@angular/core';
import {WebService} from '../../services/web.service'

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit{

  constructor (public webServices: WebService){}

  ngOnInit(): void{
    this.getDatos();
  }   

  getDatos(){
    this.webServices.getDatos().subscribe(
      res => {
        this.webServices.datos = res;
      },
      err => console.log (err)
    )
  }
  

}
