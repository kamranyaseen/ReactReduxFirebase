# React Redux with Firebase
CRUD operations with Firebase Realtime Database in a React Redux Application.

Async Redux Action
Overview
We have known how the Redux works with Action creators:
– A Component calls an Action creator.
– That creator returns an Object with type field.
– The Component dispatches the Object.
– Redux store changes.

With Async Redux Action:
– A Component calls an Action creator.
– That creator returns a Function instead of an Action object.
– The Component dispatches the Function.
– The Function runs. It can have side effects with asynchronous API calls or dispatch Actions.
