import driver, { config } from './driver';

beforeAll(async () => {
    if (process.argv.includes('ios')) {
        await driver.init(config.iOS);
    } else if(process.argv.includes('android')) {
        await driver.init(config.android);
    } else {
        console.error('Please specify the platform either android or ios')
    }
})

test('Test Accessibilty Id', async () => {
    expect(await driver.elementByAccessibilityId('email')).toBeTruthy();
    expect(await driver.elementByAccessibilityId('password')).toBeTruthy();

    const loginButton = await driver.elementByAccessibilityId('login-button')
    await driver.clickElement(loginButton)

    setTimeout(async() => {
        expect(await driver.elementByAccessibilityId('logged-in')).toBeTruthy();
    }, 50);
});