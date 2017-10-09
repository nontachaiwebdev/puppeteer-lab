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

  const URL = 'https://www.phuketplan.com/tour/detail/59c4d8540dabb59ed371d2f6'
  const firstName = 'Nontachai'
  const lastName = 'Tantiponsawas'
  const email = 'sutininter@gmail.com'
  const phone = '0969252497'
  const cardNumber = '4000000000000000'
  const expireDate = '12/20'
  const cvv = '012'

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  const keyboard = page.keyboard;
  //console.log(keyboard)
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
  firstName.split('').map(async (ch) => { await keyboard.sendCharacter(ch, {delay: 100}) });
  //await keyboard.sendCharacter('N', {delay: 100});
  await page.click('input[name="lastname"]', CLICK_OPTIONS);
  lastName.split('').map(async (ch) => { await keyboard.sendCharacter(ch, {delay: 100}) });
  await page.click('input[name="email"]', CLICK_OPTIONS);
  email.split('').map(async (ch) => { await keyboard.sendCharacter(ch, {delay: 100}) });
  await page.click('input[name="phone"]', CLICK_OPTIONS);
  phone.split('').map(async (ch) => { await keyboard.sendCharacter(ch, {delay: 100}) });
  await page.click('.sc-jDwBTQ', CLICK_OPTIONS);
  await page.waitForNavigation(DELAY_OPTIONS);
  await page.click('input[name="cardNumber"]', CLICK_OPTIONS);
  cardNumber.split('').map(async (ch) => { await keyboard.sendCharacter(ch, {delay: 100}) });
  await page.click('input[name="expireDate"]', CLICK_OPTIONS);
  expireDate.split('').map(async (ch) => { await keyboard.sendCharacter(ch, {delay: 100}) });
  await page.click('input[name="cvvNumber"]', CLICK_OPTIONS);
  cvv.split('').map(async (ch) => { await keyboard.sendCharacter(ch, {delay: 100}) });
  await page.click('.firstBottomBarBtn___33xag');
  //await page.screenshot({path: 'example.png'});
  //await browser.close();
})();
