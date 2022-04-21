import wd from 'wd';

jest.DEFAULT_TIMEOUT_INTERVAL = 600000;
const PORT = 4723;

export const config = {
    android: { 
        platformName: "Android",
        platformVersion: "10",
        deviceName: "Android Emulator",
        app: "./android/app/build/outputs/apk/debug/app-debug.apk",
        automationName: "UiAutomator2"
    },
    iOS: {
        platformName: "iOS",
        platformVersion: "15.0",
        deviceName: "iPhone 11",
        app: "./ios/build/Build/Products/Debug-iphonesimulator/AppiumReactNative.app",
        automationName: "XCUITest"
    },
}

const driver = wd.promiseChainRemote('localhost', PORT)

export default driver;