import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from './../user.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {
  questioTxt = 'Question 3 of 5';
  title = 'Do you have animals at home?';
  yes = 'Yes, I have';
  no = 'No, I havent';
  btnNext = 'Next';
  btnBack = 'Back';
  showValue = 'yes';
  domesticAnimal = true;

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
      this.domesticAnimal = true;
      this.showValue = 'yes';
      this.toggleColorById('radioYes', '#009c4e', 'radioNo', '#FFFFFF');
    }
    if (elementClassName === 'label-no') {
      this.domesticAnimal = false;
      this.showValue = 'no';
      this.toggleColorById('radioNo', '#009c4e', 'radioYes', '#FFFFFF');
    }
  }
  public forward() {
    this.saveUserData(this.domesticAnimal);
    this.navCtr.navigateForward('/collect-position');
  }

  public backward() {
    this.navCtr.navigateBack('/positive-contact');
  }

  private toggleColorById(idFirst: string, colorFirst: string, idSecond: string, colorSecond: string) {
    document.getElementById(idFirst).style.borderColor = colorFirst;
    document.getElementById(idSecond).style.borderColor = colorSecond;
  }
  private saveUserData(userProperty) {
    this.userService.addDomesticAnimals(userProperty);
  }
}

