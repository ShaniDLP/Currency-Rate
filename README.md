# Currency Exchange SPA

## Task Summary
This project is a responsive and performant Single Page Application (SPA) built with React + TypeScript, allowing users to view and monitor currency exchange rates in real-time.

The interface displays exchange rates for a customizable list of currencies relative to EUR (Euro), supports dynamic data updates every 30 seconds, and provides a clean, user-friendly experience with Ant Design components

##  Tech Stack

- **React** with **TypeScript**
- **Vite** for fast bundling
- **Ant Design (antd)** for UI components
- **React Query** for data fetching and polling
- **Custom Hooks** for localStorage


 ## Notes

- Data refreshes every 30 seconds using react-query with auto-refetch

- Randomized "change" value: Since the free API rarely updates in real-time, I added a minor random delta to simulate rate changes. (In production or with a premium API, this should be removed.)

- EUR as the fixed base currency: The free API does not allow changing the base currency from EUR.

-  The API key used is limited to 100 requests per month. If you encounter missing or empty data, it's likely due to exceeding the quota. You can generate a new free API key at `https://manage.exchangeratesapi.io/signup/free` and update your .env file accordingly. 


  
##  How to Run

Clone or download this repository:
```bash
git clone https://github.com/ShaniDLP/Currency-Rate/
cd Currency-Rate
```
Create a .env file in the root of the project:
```bash
VITE_API_KEY=3430409ee2e7a8fc98dc54ec5cfa70bc
```
Then run:

```bash
npm install
npm run dev
```

The application runs locally on:
http://localhost:5173/ (default Vite dev server)

## Possible Improvements
- Add support for custom base currency (with paid API tier)

- Add chart history for currency trends

- Unit tests and E2E tests with Cypress or Playwright

- Responsive improvements for mobile breakpoints

## Credits

Exchange rate data from exchangerate.host

Flags provided by flag-icons CSS library

## Screenshoots
![Image](https://github.com/user-attachments/assets/62f40c1f-731d-48bb-8e46-be1e9a201074)

<img width="1792" alt="Image" src="https://github.com/user-attachments/assets/028201b4-f7ed-4d76-b3a7-4ff2f780d66a" />

![Image](https://github.com/user-attachments/assets/3816dba6-1555-46aa-947b-ea3cdf55ec6a)

![Image](https://github.com/user-attachments/assets/382b2741-6814-4758-b34c-68de05307516)
