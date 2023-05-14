import { configureStore } from "@reduxjs/toolkit";
import form from "./redux/form";
import mode from "./redux/mode";

export const store = configureStore({
  reducer: {
    form,
    mode,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
