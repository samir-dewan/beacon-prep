import { test, expect } from "@playwright/test";

const username = "Samir Dewan";
const dob = String(new Date());
const email = "samirdewan1995@gmail.com";
const donation = "20";
const privacyPolicy = true;

const postData = {
    username: username,
    dob: dob,
    email: email,
    donation: donation,
    privacyPolicy: privacyPolicy
}

test("Test out name in form", async ({ page }) => {

    await page.route('*/api/donation', async route => {
        const response = await route.fetch();
        const json = await response.json();
        await route.fulfill({json});
        return json;
      });
      
    const response = await page.request.post('https://beacon-prep-hsrhl4y70-samirdewans-projects.vercel.app/api/donation', {
        data: {
           postData
        }
    });
    
    const responseBody = await response.json();
    expect(response.status()).toBe(201);
    expect(responseBody.success).toBeTruthy;
    expect(responseBody.data).toEqual(postData);

});