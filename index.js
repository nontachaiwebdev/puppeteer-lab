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
    networkIdleTimeout: '5000'
  }

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport(VIEWPORT)
  await page.goto('https://www.phuketwide.com/', DELAY_OPTIONS);
  await page.mouse.click(100, 250, {button: 'left'})
  await page.screenshot({path: 'example.png'});

  //await browser.close();
})();
