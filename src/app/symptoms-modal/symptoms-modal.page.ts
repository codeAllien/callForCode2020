import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-symptoms-modal',
  templateUrl: './symptoms-modal.page.html',
  styleUrls: ['./symptoms-modal.page.scss'],
})
export class SymptomsModalPage implements OnInit {
  title = 'Please select the corrisponding symptoms';
  btnDone = 'Done';
  symptoms = [
    { value: 'High fever', isChecked: false },
    { value: 'Cough', isChecked: false },
    { value: 'Shortness of breath or difficulty breathing', isChecked: false },
    { value: 'Tiredness', isChecked: false },
    { value: 'Aches', isChecked: false },
    { value: 'Chills', isChecked: false },
    { value: 'Sore throat', isChecked: false },
    { value: 'Loss of smell and taste', isChecked: false },
    { value: 'Headache', isChecked: false },
    { value: 'Diarrhea', isChecked: false },
    { value: 'Severe vomiting', isChecked: false }
  ];
  @Input() refreshData: any;
  selectedSymptoms: Array<string> = [];

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    const updateData = this.createNewSelectedItemsFromInput(this.refreshData);
    this.updateCheckedValue(this.symptoms, updateData);
  }

  public dismiss() {
    this.modalController.dismiss({
      dismissed: true,
      data: this.selectedSymptoms,
    });
  }

  public selectedItem(symptom: any) {
    const index = this.selectedSymptoms.indexOf(symptom.value);
    if (symptom.isChecked) {
      if (index === -1) {
        this.selectedSymptoms.push(symptom.value);
      }
    }
    if (symptom.isChecked === false) {
      this.selectedSymptoms.splice(index, 1);
    }
    this.changeChecked(symptom);
  }

  private changeChecked(symptom: any) {
    const index = this.symptoms.indexOf(symptom);
    this.symptoms[index].isChecked = symptom.isChecked;
  }
  private createNewSelectedItemsFromInput(itemsArray: any) {
    const updateData: Array<any> = [];
    if (itemsArray.length !== 0 || itemsArray === undefined) {
      itemsArray.data.forEach((element) => {
        updateData.push({ value: element, isChecked: true});
      });
    }
    return updateData;
  }
  private updateCheckedValue(array: any, updateArray: any) {
    array.forEach((element) => {
      updateArray.forEach((newElem) => {
        if (element.value === newElem.value) {
          element.isChecked = newElem.isChecked;
        }
      });
    });
  }
}
