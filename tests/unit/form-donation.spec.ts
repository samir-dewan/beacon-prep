import { test, expect } from '@playwright/test';
import FormFieldCheck from './utils/form-field-check';

test('test error handling of donation', async ({page}) => {
    await FormFieldCheck(page, '#donation', '0', '#donation-helper-text', 'positive donation amount');
})