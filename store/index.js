export const state = () => ({
  modal: {
    type: null,
    link: null
  }
})

export const mutations = {
  setModal(state, { type, link }) {
    state.modal = { type, link }
  },
  unsetModal(state) {
    state.modal = {}
  }
}
