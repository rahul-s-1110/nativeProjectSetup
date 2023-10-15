import React, { useEffect } from "react";
import { Image, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import {Images} from '../../globalConstant/imagePath'

// Splash screen hide function

function Splash() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ height: "100%", width: "100%" }}
        source={Images.splash}
      ></Image>
    </View>
  );
}

export default Splash;
