# The Visual Testing Revolution

This is the companion project for
[Pandy Knight's](https://twitter.com/AutomationPanda) talk, *The Visual Testing Revolution*.
It is a small but complete test automation project written in TypeScript.
It contains a traditional functional test
using [Playwright](https://playwright.dev/) for a demo web app,
as well as a visual test for the same app using
[Applitools Visual AI](https://applitools.com/applitools-ai-and-deep-learning/).

Although this project uses Selenium WebDriver with Java,
Applitools provides [SDKs](https://applitools.com/tutorials/)
for several tools (Selenium, Cypress, Playwright, and more)
and several languages (Java, JavaScript, C#, Python, Ruby, and more).
You can follow the techniques shown in this project for the tool and language of your choice!

Start by registering a [free Applitools account](https://auth.applitools.com/users/register).
Then, set your API key as an environment variable named `APPLITOOLS_API_KEY`.

To run tests, clone this repository and run:

```
npm install
npx playwright install
npm test
```
