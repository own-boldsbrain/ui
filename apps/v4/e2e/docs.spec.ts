import { test, expect } from '@playwright/test';

test.describe('Documentation Pages', () => {
  test('installation page loads', async ({ page }) => {
    await page.goto('/docs/installation');

    await expect(page.locator('h1')).toContainText('Installation');
    await expect(page.locator('text=Create a new project')).toBeVisible();
  });

  test('components page loads', async ({ page }) => {
    await page.goto('/docs/components');

    await expect(page.locator('h1')).toContainText('Components');
    await expect(page.locator('text=UI components built')).toBeVisible();
  });

  test('theming page loads', async ({ page }) => {
    await page.goto('/docs/theming');

    await expect(page.locator('h1')).toContainText('Theming');
  });

  test('search functionality', async ({ page }) => {
    await page.goto('/docs');

    // Assuming there's a search input
    const searchInput = page.locator('input[placeholder*="search" i]');
    if (await searchInput.isVisible()) {
      await searchInput.fill('button');
      await expect(page.locator('text=Button')).toBeVisible();
    }
  });
});

test.describe('Component Examples', () => {
  test('button component demo', async ({ page }) => {
    await page.goto('/docs/components/button');

    await expect(page.locator('h1')).toContainText('Button');
    await expect(page.locator('button')).toBeVisible();
  });

  test('form component demo', async ({ page }) => {
    await page.goto('/docs/components/form');

    await expect(page.locator('h1')).toContainText('Form');
    await expect(page.locator('form')).toBeVisible();
  });

  test('table component demo', async ({ page }) => {
    await page.goto('/docs/components/table');

    await expect(page.locator('h1')).toContainText('Table');
    await expect(page.locator('table')).toBeVisible();
  });
});