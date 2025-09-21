import { test, expect } from '@playwright/test';

test.describe('Component Sink (Internal)', () => {
  test('sink page loads', async ({ page }) => {
    await page.goto('/sink');

    await expect(page.locator('h1')).toContainText('Component Sink');
    await expect(page.locator('text=Playground for shadcn/ui components')).toBeVisible();
  });

  test('accordion component', async ({ page }) => {
    await page.goto('/sink');

    // Find accordion section
    const accordionSection = page.locator('[data-testid="accordion-demo"]');
    if (await accordionSection.isVisible()) {
      await accordionSection.locator('button').first().click();
      await expect(accordionSection.locator('[data-state="open"]')).toBeVisible();
    }
  });

  test('dialog component', async ({ page }) => {
    await page.goto('/sink');

    const dialogTrigger = page.locator('[data-testid="dialog-trigger"]');
    if (await dialogTrigger.isVisible()) {
      await dialogTrigger.click();
      await expect(page.locator('[role="dialog"]')).toBeVisible();

      // Close dialog
      await page.locator('[data-testid="dialog-close"]').click();
      await expect(page.locator('[role="dialog"]')).not.toBeVisible();
    }
  });

  test('form validation', async ({ page }) => {
    await page.goto('/sink');

    const formSection = page.locator('[data-testid="form-demo"]');
    if (await formSection.isVisible()) {
      // Try to submit empty form
      await formSection.locator('button[type="submit"]').click();

      // Check for validation errors
      await expect(formSection.locator('text=Required')).toBeVisible();
    }
  });

  test('data table sorting', async ({ page }) => {
    await page.goto('/sink');

    const tableSection = page.locator('[data-testid="table-demo"]');
    if (await tableSection.isVisible()) {
      // Click on a sortable column header
      const sortButton = tableSection.locator('button[aria-sort]').first();
      if (await sortButton.isVisible()) {
        await sortButton.click();
        // Table should be sorted
        await expect(sortButton).toHaveAttribute('aria-sort', /(ascending|descending)/);
      }
    }
  });

  test('chart components', async ({ page }) => {
    await page.goto('/sink');

    const chartSection = page.locator('[data-testid="chart-demo"]');
    if (await chartSection.isVisible()) {
      // Check if chart canvas or SVG is rendered
      await expect(chartSection.locator('svg, canvas')).toBeVisible();
    }
  });
});
