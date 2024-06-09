import { test, expect } from '@playwright/test';

test('test error handling of email', async ({page}) => {
    await page.goto(
        "https://beacon-prep-gnr93hbkv-samirdewans-projects.vercel.app/"
    );

    await expect(page).toHaveTitle("Beacon Prep");
    await page.fill('#email', 'a@');
    
})