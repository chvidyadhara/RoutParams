import { Component, OnInit } from '@angular/core';
import { ServRoutParamsService } from 'src/app/serv-rout-params.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  userdata;
  constructor(private  servrout:ServRoutParamsService,private rout:Router) { }
    userdatadisplay(){
       this.servrout.servuserdata().subscribe(result=>{
               this.userdata = result;
               console.log(this.userdata)
       })

    } 
 onclick(id){
         this.rout.navigate(['/userdatalist',id]);
    }
  ngOnInit() {
    this.userdatadisplay()
  }

}
