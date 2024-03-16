// app.config.js

export default {
  expo: {
    scheme: "mychatapp",
    name: "build-pure-firebase-chat",
    slug: "build-pure-firebase-chat",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      eas: {
        owner: "khlearnexpo2024",
        projectId: "e4bb7027-94b1-4820-b75c-d50e5bcf95a8"
      }
    }
  }
}
