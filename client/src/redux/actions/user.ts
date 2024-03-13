import { setUserAction, setLoadingAction, setErrorAction, updateUserAction } from "../slices/userSlice";

export const fetchUser = () => async (dispatch: any) => {
  try {
    dispatch(setLoadingAction(true));
    const response = await fetch("http://localhost:5000/api/user");
    const data = await response.json();
    dispatch(setUserAction(data.user));
  } catch (error) {
    dispatch(setErrorAction('error fetching user!'));
  }
}

// write an action to update the user

export const updateUser = (userId: string, data: any) => async (dispatch: any) => {
  try {
    console.log('in actions/user.ts, userId:', userId);
    console.log('in actions/user.ts, data:', data);
    console.log('in actions/user.ts, data:', JSON.stringify(data));
    dispatch(setLoadingAction(true));

    const response = await fetch(`http://localhost:5000/api/user/${userId}`, {
      method: 'PUT',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const updatedUser = await response.json();
    console.log('in actions/user.ts, updatedUser:', updatedUser);
    dispatch(updateUserAction(updatedUser.user));
  } catch (error) {
    dispatch(setErrorAction('error updating user!'));
  }
}