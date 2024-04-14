import { create } from "zustand";

export const useEntradaStore = create((set) => ({
  entrada: [],
  setEntrada: (entrada) => set(() => ({
    entrada: entrada
  }))
}));