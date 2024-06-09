import { test, expect } from '@playwright/test';
import FormFieldCheck from './utils/form-field-check';

test('test error handling of name', async ({page}) => {
    await FormFieldCheck(page, '#username', 'a', '#username-helper-text', 'two characters');
})