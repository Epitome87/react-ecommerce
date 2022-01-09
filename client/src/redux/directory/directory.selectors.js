// import { createSelector } from 'reselect';
import { createDraftSafeSelector } from '@reduxjs/toolkit';

// reselect will select only value change
export const selectDirectory = (state) => state.directory;

// Create a memo-ized selector
export const selectDirectorySections = createDraftSafeSelector(
  [selectDirectory],
  (directory) => directory.sections
);
