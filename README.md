### Notes on refactoring single file submission to cli application

- Moved set isLoading statement to before the http call to improve responsiveness of the UI.

- Added Vuex as a state management pattern.

- Created a view for recent posts.
- Created a component for blog posts.
- Created a component for comments.

- The recent posts view handles getting posts and instantiating them.

- Each blog post is responsible for it's own state, comments, dispatching actions.
