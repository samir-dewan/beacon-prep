import { test, expect } from "@playwright/test"


test("Test out donation GET request", async ({ page }) => {
    const response = await page.request.get('http://localhost:3000/api/donation');
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(responseBody.success).toBeTruthy();
})

test("Test out donation POST request", async ({ page }) => {
    const response = await page.request.post('http://localhost:3000/api/donation', {
        data: {
            username: "Samir Dewan",
            email: "samirdewan1995@gmail.com",
            donation: 20,
            privacyPolicy: true
        }
    })

    const responseBody = await response.json();

    expect(response.status()).toBe(201);
    expect(responseBody.success).toBeTruthy();
})