import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tabElements:any[]=["Tab Name1","Tab Name2","Tab Name3"]


  constructor() { }

  ngOnInit(): void {

  }

}
