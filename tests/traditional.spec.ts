// This test case spec runs a login test against the ACME bank demo app using traditional assertions.
import { test, expect } from '@playwright/test';

// This "describe" method contains related test cases with per-test setup and cleanup.
// In this example, there is only one test.
test.describe('ACME Bank', () => {

  test.beforeEach(async ({page}) => {
    page.setViewportSize({width: 1600, height: 1200});
  });

  // This test covers login for the Applitools demo site, which is a dummy banking app.
  // The interactions and verifications use typical Playwright calls.
  // Notice how much code is dedicated to assertions that don't fully test the pages.
  test('log into a bank account', async ({ page }) => {

    // Load the login page.
    await page.goto('https://demo.applitools.com');

    // Verify the full login page loaded correctly.
    await expect(page.locator('div.logo-w')).toBeVisible();
    await expect(page.locator('#username')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#log-in')).toBeVisible();
    await expect(page.locator('input.form-check-input')).toBeVisible();

    // Perform login.
    await page.locator('id=username').fill('andy');
    await page.locator('id=password').fill('i<3pandas');
    await page.locator('id=log-in').click();

    // Verify the full main page loaded correctly.

    // Check various page elements
    await expect(page.locator('div.logo-w')).toBeVisible();
    await expect(page.locator('div.element-search.autosuggest-search-activator > input')).toBeVisible();
    await expect(page.locator('div.avatar-w img').first()).toBeVisible();
    await expect(page.locator('ul.main-menu')).toBeVisible();
    await expect(page.getByText('Add Account')).toBeVisible();
    await expect(page.getByText('Make Payment')).toBeVisible();
    await expect(page.getByText('View Statement')).toBeVisible();
    await expect(page.getByText('Request Increase')).toBeVisible();
    await expect(page.getByText('Pay Now')).toBeVisible();
  
    // Check time message
    await expect(page.locator('id=time')).toHaveText(/Your nearest branch closes in:( \d+[hms])+/);

    // Check menu element names
    const accountTypes = await page.locator('ul.main-menu li span').allTextContents();
    expect(accountTypes).toEqual([
      'Card types',
      'Credit cards',
      'Debit cards',
      'Lending',
      'Loans',
      'Mortgages'
    ]);

    // Check transaction statuses
    const acceptableStatuses = ['Complete', 'Pending', 'Declined']
    const actualStatuses = await page.locator('span.status-pill + span').allTextContents();
    actualStatuses.forEach((value, index, array) => {
      expect(acceptableStatuses).toContainEqual(value);
    });
  });

});
