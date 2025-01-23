import Genre from "./genre";
import Platform from "./platform";
import SortMenu from "./sort_menu";

export default interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: SortMenu | null;
  searchText: string | null;
}
