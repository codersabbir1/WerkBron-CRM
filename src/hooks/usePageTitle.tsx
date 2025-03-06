import { create } from "zustand";

interface PageTitleState {
  title: string;
  setTitle: (newTitle: string) => void;
}

const usePageTitle = create<PageTitleState>((set) => ({
  title: "Home", // Default title
  setTitle: (newTitle: string) => set({ title: newTitle }), // Function to update title
}));

export default usePageTitle;
