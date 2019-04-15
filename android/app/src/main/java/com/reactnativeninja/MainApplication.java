package com.reactnativeninja;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.wix.interactable.Interactable;
import com.github.wumke.RNExitApp.RNExitAppPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.entria.views.RNViewOverflowPackage;
import cl.json.RNSharePackage;
import co.apptailor.googlesignin.RNGoogleSigninPackage;
import com.geektime.rnonesignalandroid.ReactNativeOneSignalPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNGestureHandlerPackage(),
            new Interactable(),
            new RNExitAppPackage(),
            new MapsPackage(),
            new RNViewOverflowPackage(),
            new RNSharePackage(),
            new RNGoogleSigninPackage(),
            new ReactNativeOneSignalPackage(),
            new SplashScreenReactPackage(),
            new VectorIconsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
