import { test, expect } from "@playwright/test"

const username = "Samir Dewan";
const email = "samirdewan1995@gmail.com";
const donation = "20";

test("E2E Donation w/ performance test", async ({ page }) => {

  const session = await page.context().newCDPSession(page)

  await page.goto(
    "http://localhost:3000"
  );

  await session.send("Performance.enable")

  await expect(page).toHaveTitle("Beacon Prep");
  await page.fill("#username", username);
  await page.fill("#email", email);
  await page.fill("#donation", donation);
  await page.check('input[name="privacyPolicy"]');
  await page.click('button[type="submit"]');

  console.log("=============CDP Performance Metrics===============")
  let performanceMetrics = await session.send("Performance.getMetrics")
  console.log(performanceMetrics.metrics)

  const response = await page.request.get('http://localhost:3000/api/donation');
  const responseBody = await response.json();

  expect(response.status()).toBe(200);
  expect(responseBody.success).toBeTruthy();

  //create a script that works that shows that what you've submitted is what's in the request.
});
