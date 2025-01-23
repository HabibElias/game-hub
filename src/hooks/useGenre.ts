import genres from "../../data/genres"


const useGenre = () =>  {
    return {
        data: genres,
        error: "",
        isLoading: false,

    }
}

export default useGenre;
