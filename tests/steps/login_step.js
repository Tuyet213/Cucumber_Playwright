const { Given, When, Then, After, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

let browser, context, page;

Before(async () => {
  browser = await chromium.launch({ 
      headless: true,  // Mở browser để theo dõi
      //slowMo: 1000     // Làm chậm các thao tác (tùy chọn, đơn vị milliseconds)
  });
  context = await browser.newContext({
    recordVideo: {
      dir: './test-results/videos/', // Thư mục lưu video
      size: { width: 1280, height: 720 } // Kích thước video
  }
  });
  page = await context.newPage();
});

Given('Người dùng truy cập trang đăng nhập', async () => {
  await page.goto('https://demo.growcrm.io/login');
});

When('Người dùng nhập email {string} và mật khẩu {string}', async (username, password) => {
  await page.locator('#email').fill(username);
  await page.locator('#password').fill(password);
});

When('Người dùng nhấp vào nút đăng nhập', async () => {
  await page.locator('#loginSubmitButton').click();
});

Then('Người dùng được chuyển hướng đến trang chủ', async () => {
  await page.waitForURL('https://demo.growcrm.io/home');
  await expect(page).toHaveURL('https://demo.growcrm.io/home', { timeout: 5000 });
});

Then('Người dùng thấy thông báo lỗi {string}', async (message) => {
  await expect(page.locator('.noty_text')).toHaveText(message, { timeout: 5000 });
});



After(async () => {
  await page.close();
  await context.close();
  await browser.close();
});