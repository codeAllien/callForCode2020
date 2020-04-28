import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.page.html',
  styleUrls: ['./emergency-contact.page.scss'],
})
export class EmergencyContactPage implements OnInit {
  questioTxt = 'Question 5 of 5';
  title = 'Before we send your information, do you want to add an emergency contact ?';
  yes = 'Yes, I have';
  no = 'No, I havent';
  btnNext = 'Next';
  btnBack = 'Back';
  showValue = 'yes';

  constructor(public navCtr: NavController) {}

  ngOnInit() {}

  public onRadioGroupClick(myEvent) {
    const element = myEvent.target;
    let elementClassName = element.classList[0];

    if (elementClassName === 'md') {
      elementClassName = element.previousSibling.classList[0];
    }
    if (elementClassName === 'radio-btn') {
      elementClassName = element.children[0].classList[0];
    }
    if (elementClassName === 'label-yes') {
      this.showValue = 'yes';
      this.toggleColorById('radioYes', '#009c4e', 'radioNo', '#FFFFFF');
    }
    if (elementClassName === 'label-no') {
      this.showValue = 'no';
      this.toggleColorById('radioNo', '#009c4e', 'radioYes', '#FFFFFF');
    }
  }
  public forward() {
    this.navCtr.navigateForward('/success-page');
  }

  public backward() {
    this.navCtr.navigateBack('/collect-position');
  }

  private toggleColorById(idFirst: string, colorFirst: string, idSecond: string, colorSecond: string) {
    document.getElementById(idFirst).style.borderColor = colorFirst;
    document.getElementById(idSecond).style.borderColor = colorSecond;
  }
}
