import Genre from "./genre";
import Platform from "./platform";

export default interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
