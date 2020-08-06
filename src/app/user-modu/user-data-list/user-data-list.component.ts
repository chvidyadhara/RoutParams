import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServRoutParamsService } from 'src/app/serv-rout-params.service';

@Component({
  selector: 'app-user-data-list',
  templateUrl: './user-data-list.component.html',
  styleUrls: ['./user-data-list.component.css']
})
export class UserDataListComponent implements OnInit {
  userdatalist;
  constructor(private act:ActivatedRoute,private serv:ServRoutParamsService) { }
  userdata(){}
  ngOnInit() {
    let id =  this.act.snapshot.params["id"];
    this.serv.userdatarout(id).subscribe(result=>{
       this.userdatalist = result;
       console.log(this.userdatalist);
    })

  }  

}
