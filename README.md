# Products

## Considerations:

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- I have used Netlify for hosting the entire app (front and backend using Lambda functions).
-

## Backend:

- The data provided by you has been trimmed to 50 records (only for testing purposes), converted into a JSON file and appended as a file inside the backend.
- The 'products' endpoint serves the products list in JSON format.

## Frontend:

- Due to time constraints I couldn't implement table pagination & filtering, but we can discuss later how I would approach the implementation of these features.
- React-table has been used for formatting the Products list in a table format.
- Routing has been implemented with react-router.
- The root page displays a list of products that the user can navigate to find basic details (e.g. price, description).
- Should the user be interested in a specific product, they can do so by clicking anywhere in the product row. The selected product is saved, and the user will be redirected to '/product'.
- '/product' will display details of the selected product in a card. The user can see additional details, and in case interested, can be redirected to the store by clicking in the specific button. If the user wants to continue the search, a button is also provided to do so.
- Basic error handling and responsiveness has been implemented, but of course this can be further expanded.

## Improvement areas:

- As mentioned, implementing pagination and filtering to improve user experience and facilitate slicing results.
- Store selected product in localStorage to show the relevant product to the user if /product page is reloaded.
- Write down unit & integration tests to cover critical phases (products list loaded, product selection is successfully recorded when click occurs)
- Overall, the UI is basic, and it can be heavily improved.
- Monitor app performance and stability, introduce logging to understand how the app is performing and detect bugs/errors timely.
- Introduce user authentication, and track user preferences to potentially target them with products they might be interested (asking for consent first).
- Thinking about a big number of products being loaded, to further load products on an as-needed basis to avoid impacting performance.
- Improve responsiveness of products table, and the card displaying the product details when selected.
- Add comments in code to clarify functionality and description to facilitate maintenance.
