import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  upgrades = [' Upgrade 1'];
  constructor() { }


  ngOnInit(): void {
    this.newGame();

  }

  newGame()
  {


    this.upgrades.push(' Upgrade 2');
    this.upgrades.push(' Upgrade 3');
    this.upgrades.push(' Upgrade 4');

  }

}
