export const state = () => ({
  modal: {
    type: null,
    data: null
  }
})

export const mutations = {
  setModal(state, { type, data }) {
    state.modal = { type, data }
  },
  unsetModal(state) {
    state.modal = {}
  }
}
