import { test, expect } from "@playwright/test";

test("Test out name in form", async ({ page }) => {
    let consoleMessagePresent = false;

    page.on('console', msg => {
        if (msg.text().includes('test@tester.co.uk')) {
            consoleMessagePresent = true;
        }
    })
  await page.goto(
    "https://beacon-prep-hsrhl4y70-samirdewans-projects.vercel.app/"
  );

  await expect(page).toHaveTitle("Beacon Prep");
  await page.fill("#username", "Samir Dewan");
  await page.fill("#DOB", String(new Date()));
  await page.fill("#email", "test@tester.co.uk");
  await page.fill("#donation", "20");
  await page.check('input[name="privacyPolicy"]');
  await page.click('button[type="submit"]');
  await expect(consoleMessagePresent).toBeTruthy();
});
