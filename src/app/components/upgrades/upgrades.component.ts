import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.css']
})
export class UpgradesComponent implements OnInit {

  numberOfUpgrade:number;
  prompt:string;

  constructor() { }

  ngOnInit(): void {
    this.numberOfUpgrade = 0;
    this.prompt = ' Cars';
  }



  setprompt(str:string)
  {
    this.prompt = str;
  }

  onClick()
  {
    this.numberOfUpgrade++;

  }

}


