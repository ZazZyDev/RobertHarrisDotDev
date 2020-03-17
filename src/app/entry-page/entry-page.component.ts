import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css']
})
export class EntryPageComponent implements OnInit {
  firstName = 'Robert';
  surname = 'Harris';
  isVisible: boolean = false;

mouseHover(event:boolean){
  if(event){
    this.isVisible=true;

  }
}



  constructor() { }

  ngOnInit(): void {
  }

}
