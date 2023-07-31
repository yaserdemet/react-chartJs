import create from 'zustand'

const useStore = create(set => ({
  inputValue: "",
  setInputValue: (value : any) => set({ inputValue: value }),
  resetInputValue: () => set({ inputValue: "" }),
}))
