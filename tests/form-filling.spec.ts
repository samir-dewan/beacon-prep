import { test, expect } from "@playwright/test";

test("Test out name in form", async ({ page }) => {
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

  await page.waitForResponse(response => response.url().includes('/api/getDonation') && response.status() === 200);

  const response = await page.request.get('https://beacon-prep-hsrhl4y70-samirdewans-projects.vercel.app/api/getDonation');
  const responseBody = await response.json();

  expect(response.status()).toBe(200);
  expect(responseBody.success).toBeTruthy();
  expect(responseBody.data).toEqual(expect.objectContaining({
    email: 'test@tester.co.uk',
    username: 'Samir Dewan'
  }))
});
