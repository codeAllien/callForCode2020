import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.page.html',
  styleUrls: ['./success-page.page.scss'],
})
export class SuccessPagePage implements OnInit {
  questioTxt = '';
  title = 'Thank you for your time! Our team is on the way to you'

  constructor() { }

  ngOnInit() {
  }

}
