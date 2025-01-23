import platforms from "../../data/platforms";

const usePlatform = () => {
  return { data: platforms, error: "", isLoading: false };
};
export default usePlatform;

// useData<Platform>(
//     "/platforms/lists/parents"
//   );
