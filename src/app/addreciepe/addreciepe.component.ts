import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addreciepe',
  templateUrl: './addreciepe.component.html',
  styleUrls: ['./addreciepe.component.css']
})
export class AddreciepeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  description=""
  flavour=""
  colour=""

  readValues=()=>{
    let data={
      "name":this.name,
      "description":this.description,
      "flavour":this.flavour,
      "colour":this.colour
    }
    console.log(data)
    this.myapi.addReciepe(data).subscribe(
      (data)=>{
        alert("Data added successfully")
      }
    )
  }

  ngOnInit(): void {
  }

}
