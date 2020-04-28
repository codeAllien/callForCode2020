import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from './../user.service';

@Component({
  selector: 'app-positive-contact',
  templateUrl: './positive-contact.page.html',
  styleUrls: ['./positive-contact.page.scss'],
})
export class PositiveContactPage implements OnInit {
  questioTxt = 'Question 2 of 5';
  title = 'Do you had contact with a person who has tested positive for CODIV-19?';
  yes = 'Yes, I did';
  no = 'I dont know yet';
  btnNext = 'Next';
  btnBack = 'Back';
  showValue = '';
  positiveContact = true;

  constructor(public navCtr: NavController, public userService: UserService) {}

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
      this.positiveContact = true;
      this.showValue = 'yes';
      this.toggleColorById('radioYes', '#009c4e', 'radioNo', '#FFFFFF');
    }
    if (elementClassName === 'label-no') {
      this.positiveContact = false;
      this.showValue = 'no';
      this.toggleColorById('radioNo', '#009c4e', 'radioYes', '#FFFFFF');
    }
  }
  
  public forward() {
    this.saveUserData(this.positiveContact);
    this.navCtr.navigateForward('/animals');
  }

  public backward() {
    this.navCtr.navigateBack('/home');
  }

  private toggleColorById(idFirst: string, colorFirst: string, idSecond: string, colorSecond: string) {
    document.getElementById(idFirst).style.borderColor = colorFirst;
    document.getElementById(idSecond).style.borderColor = colorSecond;
  }
  private saveUserData(userProperty) {
    this.userService.addPositiveContact(userProperty);
  }
}
