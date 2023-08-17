    import { createSlice, PayloadAction } from '@reduxjs/toolkit';
    import { _notifications } from 'src/_mock/arrays';

    interface CommentState {
    value: string[];
    }

    const initialState: CommentState = {
    value: ["dawxdaw", "dxawdxaw"]
    };

    const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<string>) => {
            // Add the new comment to the state's value array
            state.value.push(action.payload);
          }
    
    },
    });

    export const { addComment } = commentSlice.actions;
    export default commentSlice.reducer;
