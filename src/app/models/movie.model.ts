export interface IMovie {
    popularity: number;
    voteCount: number;
    video: boolean;
    posterPath: string;
    id: number;
    adult: boolean;
    backdropPath: string;
    originalLanguage: string;
    originalTitle: string;
    genreIds: number[];
    title: string;
    voteAverage: number;
    overview: string;
    releaseDate: string;
}
