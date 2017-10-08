const puppeteer = require('puppeteer');


(async () => {
  const VIEWPORT = {
    width: 375,
    height: 667,
    isMobile: true,
    hasTouch: true
  }

  const DELAY_OPTIONS = {
    waitUntil: 'networkidle',
    networkIdleTimeout: 2000
  }

  const CLICK_OPTIONS = {
    button: 'left',
    clickCount: 1,
    delay: 0
  }

  const amountOfAdult = 1

  const URL = 'https://www.phuketplan.com/tour/detail/59c4d8540dabb59ed371d2c4'

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport(VIEWPORT)
  await page.goto(URL);
  await page.waitForNavigation(DELAY_OPTIONS)
  await page.click('.firstBottomBarBtn___33xag');
  await page.waitForNavigation(DELAY_OPTIONS);
  for(let i = 0 ; i <= amountOfAdult ; i++){
    await page.click('.fa-plus', CLICK_OPTIONS);
  }
  await page.click('.sc-jDwBTQ', CLICK_OPTIONS);
  await page.waitForNavigation(DELAY_OPTIONS);
  await page.click('input[name="firstname"]', CLICK_OPTIONS);
  await page.keyboard.sendCharacter('N', {delay: 100});
  await page.click('input[name="lastname"]', CLICK_OPTIONS);
  //await page.screenshot({path: 'example.png'});
  //await browser.close();
})();
