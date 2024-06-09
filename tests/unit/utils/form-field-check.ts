import { expect, Page } from '@playwright/test';

export default async function FormFieldCheck(page: Page, checkId: string, incorrectInput: any, errorTextId: string, errorText: string) {
    await page.goto(
        "https://beacon-prep-git-master-samirdewans-projects.vercel.app/"
    );

    await expect(page).toHaveTitle("Beacon Prep");
    await page.fill(checkId, incorrectInput);
    await page.click('h1');

    const errorTextLocator = await page.locator(errorTextId);
    await expect(errorTextLocator).toContainText(errorText)
}