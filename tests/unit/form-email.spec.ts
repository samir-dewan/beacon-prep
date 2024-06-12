import { test } from '@playwright/test';
import FormFieldCheck from './utils/form-field-check';

test('test error handling of name', async ({page}) => {
    await FormFieldCheck(page, '#username', 'a', '#username-helper-text', 'two characters');
})

test('test error handling of email', async ({page}) => {
    await FormFieldCheck(page, '#email', 'abcdef', '#email-helper-text', 'valid email address');
})

test('test error handling of donation', async ({page}) => {
    await FormFieldCheck(page, '#donation', '0', '#donation-helper-text', 'positive donation amount');
})