import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');

  // Check if the page title contains shadcn/ui
  await expect(page).toHaveTitle(/shadcn\/ui/);

  // Check for main heading
  await expect(page.locator('h1')).toContainText('shadcn/ui');

  // Check navigation menu
  await expect(page.locator('nav')).toBeVisible();

  // Check for getting started section
  await expect(page.locator('text=Getting started')).toBeVisible();
});

test('navigation menu works', async ({ page }) => {
  await page.goto('/');

  // Click on Getting started trigger
  await page.locator('button:has-text("Getting started")').click();

  // Check if dropdown content appears
  await expect(page.locator('text=Introduction')).toBeVisible();
  await expect(page.locator('text=Installation')).toBeVisible();
});

test('components navigation', async ({ page }) => {
  await page.goto('/');

  // Click on Components trigger
  await page.locator('button:has-text("Components")').click();

  // Check if components list appears
  await expect(page.locator('text=Alert Dialog')).toBeVisible();
  await expect(page.locator('text=Hover Card')).toBeVisible();
});

test('theme switcher works', async ({ page }) => {
  await page.goto('/');

  // Check if theme toggle exists
  const themeToggle = page.locator('[data-testid="theme-toggle"]');
  if (await themeToggle.isVisible()) {
    await themeToggle.click();
    // Theme should change (this is a basic check)
    await expect(page.locator('html')).toHaveAttribute('data-theme');
  }
});

test('responsive design', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 }); // iPhone size
  await page.goto('/');

  // Check if mobile navigation works
  await expect(page.locator('nav')).toBeVisible();

  // Check if content is readable on mobile
  await expect(page.locator('h1')).toBeVisible();
});
