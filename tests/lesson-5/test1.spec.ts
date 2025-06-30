import { test, expect } from '@playwright/test';
// Bi chan UIP nen phai chay web o local

test('input user regstration information', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/index.html');

    // Click click vào “Bài học 1: Register Page” 
    await page.getByRole('link', { name: 'Bài học 1: Register Page (có đủ các element)' }).click();

    await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();

    // Nhập đầy đủ các thông tin, click button register 
    await page.locator("//input[@id='username']").fill("user huong");
    await page.locator("//input[@id='email']").pressSequentially("huong@gmail.com")

    const isCheckedRadio = page.locator("//input[@id='female']").isChecked();
    await page.locator("//input[@id='female']").check();


    const isCheckedCB = page.locator("//input[@value='cooking']").isChecked();
    await page.locator("//input[@value='cooking']").check();

    await page.locator("//select[@id='interests']").selectOption({ value: 'music' });

    await page.locator("//select[@id='country']").selectOption('Canada');

    // date time picker
    //await page.locator("//input[@id='dob']").click();
    // await page.locator("//input[@id='dob']").fill('06/30/2025');
    //await expect(page.locator("//select[@id='dob']").isVisible);
    await page.fill("//textarea[@id='bio']", 'this is my bio');


    // slide range
    // const sliderRange = page.locator("//input[@id='rating']");
    // const newRangeValue = 7;

    await page.locator("//input[@id='favcolor']").fill("#00ff1e");

    const isCheckedNewsletter = page.locator("//input[@id='newsletter']").isChecked();
    await page.locator("//input[@id='newsletter']").check();



    await page.locator("//div[@id='starRating']").click();

    await page.locator("//button[@type='submit']").click();

});

// test.afterAll(({ page }) => {
//     page.close();
// });
