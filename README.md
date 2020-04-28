# Call For Code Challenge 2020
This project is created for the Call for Code 2020 Challenge to respond to the CODIV-19 pandemic

# Emergency-Call
This IONIC Application let user send their health status and location to a database to store, monitoring and send helt to the person, who are affectet from CODIV-19.

## Setting up
1. Import the existing project
2. Install **IONIC CLI** globally with the following command on your terminal
`````
npm install -g @ionic/cli
`````
3. Setup all cordova ptalform on your computer to run the application on the devices:
- You need to install Android Studio to install all the SDK and run the simulator for Android deviced correctly
- You need to install XCode to install all the SDK and run the simulator for IOS devices
See more on (https://ionicframework.com/docs/developing/ios)
4. After installing all the required SDKs open the terminal from the application root folder and run the command
````
ionic cordova run android
````
or
````
ionic cordova run ios
````
Attention: &nbsp;
Addind the _--target= DeviceID_ target you can also select the simulator device you want to test the application.
5. For the position this project use the **NativCordova Geolocation Plugin**. This plugin is not available for the web. Therefore to test all the funcitonalities is raccomandable to test on a device.
