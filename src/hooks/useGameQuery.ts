import { create } from "zustand";

interface GameQueryStoreType {
  genreId?: number;
  platformId?: number;
  ordering?: string;
  searchText?: string;
  selectGenre: (genreId?: number) => void;
  selectPlatform: (platformId?: number) => void;
  search: (selectedText?: string) => void;
  selectOrder: (selectedOrder?: string) => void;
}

const useGameQuery = create<GameQueryStoreType>((set) => ({
  selectGenre: (Id) => set({ genreId: Id }),
  selectPlatform: (Id) => set({ platformId: Id }),
  search: (selectedText) => set({ searchText: selectedText }),
  selectOrder: (selectedOrder) => set({ ordering: selectedOrder }),
}));

export default useGameQuery;
