import { supabase } from "App";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const userSlice = createSlice({
  name: "user",
  initialState: { access_token: null, email: null, username: null },
  reducers: {
    storeUsersInfos(state, action) {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.access_token = action.payload.access_token;
    },
  },
});

export const signUp = (userInfos, callBack) => {
  return async (dispatch) => {
    try {
      // display loading notfication
      toast.loading("signing up. please wait...");

      //get a user infos with specific username
      const { data: users, error: getUsersError } = await supabase
        .from("users")
        .select("*")
        .or(`username.eq.${userInfos.username},email.eq.${userInfos.email}`);
      //if it has error, throw an error
      if (getUsersError) throw new Error("something went wrong. try again.");
      console.log(users);
      //if users length is not 0...
      if (users.length !== 0) {
        let errorMessage = "";
        //if users entered email and password is equal with the get infos, user already registered
        if (
          users[0].email === userInfos.email &&
          users[0].username === userInfos.username
        ) {
          errorMessage = "account already registered.";
          //if just users entered email is equeal to the get email, it means someone registered with this email
        } else if (users[0].email === userInfos.email) {
          errorMessage = "an other account with this email already registered.";
          //if just users entered username is equal to get username, it means someone used this username
        } else if (users[0].username === userInfos.username) {
          errorMessage =
            "an other account with this username already registered.";
        }

        throw new Error(errorMessage);
      }

      //sign up user
      const { error: signUpError, session } = await supabase.auth.signUp({
        email: userInfos.email,
        password: userInfos.password,
      });
      if (signUpError) throw new Error(signUpError.message);

      //insert users email and username to the table
      const { error } = await supabase.from("users").insert([
        {
          email: userInfos.email,
          username: userInfos.username,
          access_token: session.access_token,
        },
      ]);
      if (error) throw new Error(error.message);

      //remove loading notfication
      toast.dismiss();
      // display success notfication
      toast.success("signed up successfuly!");

      //dispatch users infos
      dispatch(userSlice.actions.storeUsersInfos(userInfos));
      //set the is signing up state to false
      callBack();
    } catch (error) {
      //if something went wrong, first remove loading notfication
      toast.dismiss();
      //display error notfication
      toast.error(error.message);
      callBack();
    }
  };
};

export const signIn = (userInfos, callBack) => {
  return async (dispatch) => {
    try {
      toast.loading("signing in...");
      //sign in user
      const {
        user: signedInUser,
        error: signInUserError,
        session,
      } = await supabase.auth.signIn({
        email: userInfos.email,
        password: userInfos.password,
      });
      if (signInUserError) throw new Error(signInUserError.message);

      //get users infos
      const { data: user, error: getUserError } = await supabase
        .from("users")
        .select("*")
        .eq("email", userInfos.email);
      if (getUserError) throw new Error(getUserError.message);

      dispatch(
        userSlice.actions.storeUsersInfos({
          username: user[0].username,
          email: signedInUser.email,
          access_token: session.access_token,
        })
      );

      toast.dismiss();
      toast.success("signed in successfuly!")
      callBack()
    } catch (error) {
      toast.dismiss();
      toast.error(error.message);
      callBack();
    }
  };
};

export default userSlice.reducer;
