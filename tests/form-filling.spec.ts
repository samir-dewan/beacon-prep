import { test, expect } from "@playwright/test";

const username = "Samir Dewan";
const email = "samirdewan1995@gmail.com";
const donation = "20";

test("Test out name in form", async ({ page }) => {
  await page.goto(
    "https://beacon-prep-hsrhl4y70-samirdewans-projects.vercel.app/"
  );

  await expect(page).toHaveTitle("Beacon Prep");
  await page.fill("#username", username);
  await page.fill("#email", email);
  await page.fill("#donation", donation);
  await page.check('input[name="privacyPolicy"]');
  await page.click('button[type="submit"]');

//   const response = await page.request.get('https://beacon-prep-hsrhl4y70-samirdewans-projects.vercel.app/api/donation');

//   expect(response.status()).toBe(200);
  // expect(responseBody.success).toBeTruthy();
  // expect(responseBody.data).toEqual(expect.objectContaining({
  //   email: email,
  //   username: username
  // }))
});
