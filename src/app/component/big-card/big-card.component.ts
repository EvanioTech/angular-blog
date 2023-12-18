import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  linkSite:string =""
  @Input()
  photoCover:string ="";
  @Input()
  cardTitle:string ="IA nossa nova aliada!";
  @Input()
  cardDescription:string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
