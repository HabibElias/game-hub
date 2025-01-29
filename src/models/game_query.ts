
export default interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering?: string;
  searchText: string | null;
}
