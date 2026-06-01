# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Render a List of Fruits" [level=1] [ref=e3]
  - paragraph [ref=e4]: This demo app renders a list of fruits. The tests for this app mock the api call to return only mocked data, intercept the request and add a new fruit to the response and use HAR files to mock the API
  - paragraph [ref=e5]:
    - link "Check out the tests for this repo" [ref=e6] [cursor=pointer]:
      - /url: https://github.com/microsoft/playwright-examples/blob/main/tests/api-mocking/api-mocking.spec.ts
  - paragraph [ref=e7]:
    - link "Learn more on API mocking in Playwright" [ref=e8] [cursor=pointer]:
      - /url: https://playwright.dev/docs/mock
  - text: Loading...
```