export const state = () => ({
  user: false,
  userData: null,
})

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (
    state: {
      userData: { uid: any; email: any; displayName: any }
      user: boolean
    },
    { authUser, claims }: any
  ) => {
    if (authUser) {
      const { uid, email, displayName } = authUser;
      state.user = true
      state.userData = { uid, email, displayName }
    } else {
      state.user = false
    }
  },
}
