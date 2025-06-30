import { test, expect } from '@playwright/test';
// Bi chan UIP nen phai chay web o local

test('Add Personal notes', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/index.html');

    // Click click vào “Bài học 2: Product page” 

    await page.locator("//a[@href='04-xpath-personal-notes.html']").click();

    await expect(page.getByRole('heading', { name: 'Personal Notes' })).toBeVisible();

    // add 3 notes

    const addNote = page.locator("//input[@id='note-title']");
    for (let i = 1; i <= 3; i++) {
        await addNote.fill("title" + [i]);
        await page.locator("//input[@id='note-title']").clear();
        await page.locator("//input[@id='note-title']").fill('note' + [i]);

        await page.locator("//textarea[@id='note-content']").clear();
        await page.locator("//textarea[@id='note-content']").fill('the first line of note');
        await page.locator("//button[@id='add-note']").click();

        //await expect(page.locator("//strong[text()='note 1']")).toBeVisible();


    }



});