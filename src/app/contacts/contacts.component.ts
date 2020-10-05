import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
