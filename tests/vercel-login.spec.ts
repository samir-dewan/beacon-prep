import { test, expect } from "@playwright/test";

test("Going to homepage", async ({ page, context }) => {
  test.slow();

  const vercelTitle = "Login – Vercel";
  const username = "samir-dewan";
  const password = "Whyisstrat0sbanned?";

  await page.goto(
    "https://beacon-prep-git-master-samirdewans-projects.vercel.app"
  );
  await expect(page).toHaveTitle(vercelTitle);
  await page.getByText("Github").click();

  const [newPage] = await Promise.all([context.waitForEvent("page")]);

  await newPage.waitForLoadState();

  await newPage.fill('input[name="login"]', "samir-dewan");
  await newPage.fill('input[name="password"]', password!);
  await newPage.click('input[name="commit"]');

  await page.waitForTimeout(7500);
  await page.waitForLoadState();
  await expect(page).toHaveTitle("Beacon Prep");
  await context.storageState({path: "auth.json"});
});
