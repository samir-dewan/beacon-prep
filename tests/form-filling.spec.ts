import { test, expect } from "@playwright/test"

const username = "Samir Dewan";
const email = "samirdewan1995@gmail.com";
const donation = "20";

test("Test out name in form", async ({ page }) => {
  await page.goto(
    "http://beacon-prep-git-master-samirdewans-projects.vercel.app/"
  );

  await expect(page).toHaveTitle("Beacon Prep");
  await page.fill("#username", username);
  await page.fill("#email", email);
  await page.fill("#donation", donation);
  await page.check('input[name="privacyPolicy"]');
  await page.click('button[type="submit"]');

  await page.waitForResponse(response => response.url().includes('/api/donation') && response.status() === 200);

  const response = await page.request.get('https://beacon-prep-git-master-samirdewans-projects.vercel.app/api/donation');
  const responseBody = await response.json();

  expect(response.status()).toBe(200);
  expect(responseBody.success).toBeTruthy();
  expect(responseBody.data).toEqual(expect.objectContaining({
    email: 'test@tester.co.uk',
    username: 'Samir Dewan'
  }))
});
