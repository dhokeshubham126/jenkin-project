# Cucumber Playwright Login Automation

This project is a Cucumber + Playwright-based UI test automation setup for validating the login flow of the DemoBlaze web application.

## Overview

The framework follows a simple structure:
- Feature files describe the business scenario in Gherkin.
- Step definition files map the scenarios to code.
- Page object classes encapsulate page interactions.
- Support hooks manage browser lifecycle and setup/teardown.
- Environment variables are used for URLs and login credentials.

## Project Structure

- `features/` - contains feature files such as login scenarios
- `steps/` - Cucumber step definitions
- `support/` - hooks and world configuration
- `pageobject/` - page-level objects for login, home, and logout flows
- `utils/` - shared helpers, JSON data, and browser setup
- `.env` - environment configuration values
- `package.json` - project dependencies and scripts

## Prerequisites

Before running the tests, make sure you have:

- Node.js 18+ installed
- npm installed
- A browser available for Playwright (Chromium is used by default)

## Installation

From the project root, run:

```bash
npm install
```

This installs the required packages, including:
- `@cucumber/cucumber`
- `@playwright/test`
- `dotenv`

## Environment Configuration

The project reads values from `.env` in the root folder.

Example:

```env
ENVLINK=https://demoblaze.com/index.html
USERID=apple99
PASSWORD=apple123
```

The configuration is loaded in the test code with `dotenv`, and values fall back to `data.json` if the environment variables are not present.

## Running the Tests

Run the feature file with:

```bash
npx cucumber-js --require ./support/**/*.js --require ./steps/**/*.js ./features/login.feature
```

You can also run all features in the project by using:

```bash
npx cucumber-js --require ./support/**/*.js --require ./steps/**/*.js
```

## Test Flow

The login scenario follows this flow:

1. Open the DemoBlaze URL
2. Fill username and password
3. Click the login button
4. Verify the login is successful

## Notes

- The project uses ESM modules because `"type": "module"` is enabled in `package.json`.
- Browser setup is managed in the Cucumber hooks.
- The code is organized to keep test logic separate from page interaction logic.
- Playwright assertions are used to verify visibility and other UI states.

## Troubleshooting

If the tests fail:

- Confirm all dependencies are installed with `npm install`
- Check that `.env` exists in the project root
- Ensure the correct file paths are used when running Cucumber
- Verify the app URL and credentials are valid
- Make sure the browser is available to Playwright

## Useful Commands

```bash
npm install
npx cucumber-js --require ./support/**/*.js --require ./steps/**/*.js ./features/login.feature
```
