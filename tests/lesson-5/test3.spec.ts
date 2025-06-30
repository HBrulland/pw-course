import { test, expect } from '@playwright/test';
// Bi chan UIP nen phai chay web o local

test('Add products to basket', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/index.html');

    // Click click vào “Bài học 2: Product page” 

    await page.locator("//a[@href='03-xpath-todo-list.html']").click();

    await expect(page.getByRole('heading', { name: 'To-Do List' })).toBeVisible();

    // add 100 tasks
    const inputTask = page.locator("//input[@placeholder='Enter a new task']");
    for (let i = 1; i <= 100; i++) {
        await inputTask.fill("task number" + [i]);
        await page.locator("//button[@id='add-task']").click();

        // const addTaskButton = page.locator("//input[@id='add-task']");
        // for (let i = 0; i < 100; i++) {
        //     await addTaskButton.click();
        // }


    }



});