import driver, { config } from './driver';

beforeAll(async () => {
    if (!process.argv.includes('ios') && !process.argv.includes('android')) {
        console.error('Please specify the platform either android or ios')

        return
    }
    
    if(process.argv.includes('android')) {
        await driver.init(config.android)
    } else if(process.argv.includes('ios')) {
        await driver.init(config.iOS)
    }

    await driver.setImplicitWaitTimeout(100000);
})

test('Increment and decrement test', async () => {
    expect(await driver.elementByAccessibilityId('splashscreen.title')).toBeTruthy();

    const startButton = await driver.elementByAccessibilityId('splashscreen.start')
    await driver.clickElement(startButton)

    expect(await driver.elementByAccessibilityId('counter.number')).toBeTruthy();
});