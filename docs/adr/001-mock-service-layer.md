What is a mock service layer?
    it is a fake implementation of your REAL data services. It should return realistic data and live behind the same API as the real backend.
Why is it important to introduce a service layer early?
    its important to separate the UI from the data sources so the system is easier to maintain, scale, test, refactor, and lead as it gets more and more complex. Introducing the service layer early is like introducing a boundary between the UI/components and the business logic.

Why does mock data live outside components?
    Mock data lives in services for a few reasons: 
        1. Single source of truth = consistent behaviour throughout the app = easier to evolve
        2. UI stays declarative = this separation keeps components readable and testable
        3. Mocks behave like APIs forcing UI to handle real world conditions early
        4. Easy replacement!

How does this support parallel backend/frontend work?
    Instead of having both teams waiting on each others work, they can both decide on key information such as types, function signatures, error shapes, etc. and allow the frontend to build and test agains the mock services while the backend implements the real API. Once the backend is ready it is usually a one line update to swap implementations. 

How does this enable contract testing? 
    Mocks can be used to validate backend responses and catch breaking changes early on.

