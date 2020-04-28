import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { UserService } from './../user.service';

// declare var google;

@Component({
  selector: 'app-collect-position',
  templateUrl: './collect-position.page.html',
  styleUrls: ['./collect-position.page.scss'],
})
export class CollectPositionPage implements OnInit {
  questioTxt = 'Question 4 of 5';
  title = 'Send us your position';
  wrongPosition = 'It is wrong ? Please write it here';
  location = 'Activate Location';
  address = 'Address:';
  btnNext = 'Next';
  btnBack = 'Back';
  inputValue = '';

  private latitude: number;
  private longitude: number;
  public fullUserAdress: any;

  constructor(public navCtr: NavController, public zone: NgZone, private geolocation: Geolocation,
              private nativeGeocoder: NativeGeocoder, public platform: Platform, public userService: UserService) { }

  ngOnInit() { }

  public sendPosition() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.convertIntoAdress(resp.coords.latitude, resp.coords.longitude);
      this.assignValueToInput(this.fullUserAdress.toString());

    }).catch((err) => {
      console.log('Error getting location', err);
    });
    console.log(this.latitude + ', ' + this.longitude);
  }

  public assignValueToInput(fullUserAdress: string) {
    this.inputValue = fullUserAdress;
  }

  public assignChange(myEvent) {
    this.fullUserAdress = myEvent.detail.value;
  }

  public sendData() {
    this.saveUserData(this.fullUserAdress);
    this.userService.createUsers();
  }
  public forward() {
    this.saveUserData(this.fullUserAdress);
    this.navCtr.navigateForward('/success-page');
  }

  public backward() {
    this.navCtr.navigateBack('/animals');
  }

  private convertIntoAdress(latitude: number, longitude: number) {
    let locationFromCoordinates: any;

    if (this.platform.is('cordova')) {
      const options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      this.nativeGeocoder.reverseGeocode(latitude, longitude, options).
        then((result: NativeGeocoderResult[]) => locationFromCoordinates = result[0])
        .catch((error: any) => console.log(error));

    } else {
      this.getFullAdress(latitude, longitude);
    }
  }

  /* for google maps
  async getFullAdress(latitude: number, longitude: number, type?) {
    let city: string;

    if (navigator.geolocation) {
      const geocoder = await new google.maps.Geocoder();
      const userCoordinates = await google.maps.LatLng(latitude, longitude);
      const request = { latLng: userCoordinates };

      await geocoder.geocode(request, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const resultAdress = results[0];
          this.zone.run(() => {
            if (resultAdress != null) {
              city = resultAdress.formatted_address;
              if (type === 'reverseGeocode') {
                this.fullUserAdress = resultAdress.formatted_address;
              }
            }
          });
        }
      });
    }
  }
  */
  async getFullAdress(latitude: number, longitude: number) {
    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.fullUserAdress = result[0];
        console.log(JSON.stringify(result[0]));
      }).catch((error: any) => console.log(error));
  }

  private saveUserData(userProperty) {
    this.userService.addFullAddress(userProperty);
  }
}
