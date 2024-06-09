import { test, expect } from '@playwright/test';
import FormFieldCheck from './utils/form-field-check';

test('test error handling of email', async ({page}) => {
    await FormFieldCheck(page, '#email', 'abcdef', '#email-helper-text', 'valid email address');
})