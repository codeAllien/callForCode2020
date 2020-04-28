import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SymptomsModalPage } from '../symptoms-modal/symptoms-modal.page';
import { NavController } from '@ionic/angular';
import { UserService } from './../user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  navBarTitle  = 'Emergency';
  questioTxt = 'Question 1 of 5';
  title = 'How are you feeling today?';
  well = 'I am feeling well, thanks';
  sick = 'I am feeling sick';
  btnDone = 'Continue';
  showValue = 'ok';
  retrievedData: Array<string> = [];

  constructor(public modalController: ModalController, public navCtr: NavController, public userService: UserService) {}

  public onRadioGroupClick(myEvent) {
    const element = myEvent.target;
    let elementClassName = element.classList[0];

    if (elementClassName === 'md') {
      elementClassName = element.previousSibling.classList[0];
    }
    if (elementClassName === 'radio-btn') {
      elementClassName = element.children[0].classList[0];
    }
    if (elementClassName === 'label-well') {
      this.showValue = 'ok';
      this.toggleColorById('radioWell', '#009c4e', 'radioSick', '#FFFFFF');
    }
    if (elementClassName === 'label-sick') {
      this.showValue = 'sick';
      this.toggleColorById('radioSick', '#009c4e', 'radioWell', '#FFFFFF');
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SymptomsModalPage,
      swipeToClose: true,
      presentingElement: await this.modalController.getTop(),
      componentProps: {
        refreshData: this.retrievedData
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.retrievedData = data;
  }

  public forward() {
    this.saveUserData((this.retrievedData as any).data);
    this.navCtr.navigateForward('/positive-contact');
  }

  private toggleColorById(idFirst: string, colorFirst: string, idSecond: string, colorSecond: string) {
    document.getElementById(idFirst).style.borderColor = colorFirst;
    document.getElementById(idSecond).style.borderColor = colorSecond;
  }
  private saveUserData(userProperty) {
    this.userService.addSymptoms(userProperty);
  }
}
