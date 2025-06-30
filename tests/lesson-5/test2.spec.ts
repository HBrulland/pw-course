import { test, expect } from '@playwright/test';
// Bi chan UIP nen phai chay web o local

test('Add products to basket', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/index.html');

    // Click click vào “Bài học 2: Product page” 

    await page.locator("//a[@href='02-xpath-product-page.html']").click();

    await expect(page.getByRole('heading', { name: 'Simple E-commerce' })).toBeVisible();

    // add products
    await page.locator("//button[@data-product-id='1']").dblclick();
    const addCartButton = page.locator("//button[@data-product-id='2']");
    for (let i = 0; i < 3; i++) {
        await addCartButton.click();
    }
    await page.locator("//button[@data-product-id='3']").click()


});