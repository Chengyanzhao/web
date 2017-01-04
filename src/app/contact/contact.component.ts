import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

export class ContactConfig {
  name: string;
  iconFileName: string;
  value: string;
  bgColor: string;
  url: string;
}

const contacts: ContactConfig[] = [
  { name: "facebook", iconFileName: "facebook.png", value: 'cyzFacebook', bgColor: '#333', url: 'www.baidu.com' },
  { name: "QQ", iconFileName: "facebook.png", value: '451354', bgColor: '#333', url: '' },
  { name: "Phone", iconFileName: "facebook.png", value: '13122114111', bgColor: '#333', url: '' },
  { name: "twitter", iconFileName: "facebook.png", value: 'cyzFacebook1', bgColor: '#3b5998', url: 'www.baidu.com' },
  { name: "Dribbble", iconFileName: "dribbble.png", value: 'cyzFacebook2', bgColor: '#ea4c89', url: 'www.baidu.com' },
  { name: "Instagram", iconFileName: "instagram.png", value: 'cyzFacebook2', bgColor: '#8d6851', url: 'www.baidu.com' },
  { name: "Vimeo", iconFileName: "vimeo.png", value: 'cyzFacebook2', bgColor: '#162221', url: 'www.baidu.com' },

]

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myContacts = contacts;
  focusItem: ContactConfig = {
    name: "ContactMe", iconFileName: "facebook.png", value: '', bgColor: '#333', url: ''
  };
  constructor(private route: Router) { }

  ngOnInit() {
    //window.document.body.style.backgroundColor = "#00b5ec";
  }

  iconFocus($event, contact: ContactConfig): void {
    event.preventDefault();
    this.focusItem = contact;
    window.document.body.style.backgroundColor = contact.bgColor;
  }

  iconClick($event): void {
    $event.preventDefault();
  }

}
