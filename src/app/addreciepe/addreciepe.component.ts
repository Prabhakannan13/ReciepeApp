import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addreciepe',
  templateUrl: './addreciepe.component.html',
  styleUrls: ['./addreciepe.component.css']
})
export class AddreciepeComponent implements OnInit {

  constructor() { }

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
  }

  ngOnInit(): void {
  }

}
