import { test, expect, chromium } from "@playwright/test";

test("Test out name in form", async ({ page }) => {
    await page.goto(
        "https://beacon-prep-hsrhl4y70-samirdewans-projects.vercel.app/"
      );

    await expect(page).toHaveTitle("Beacon Prep");
});
