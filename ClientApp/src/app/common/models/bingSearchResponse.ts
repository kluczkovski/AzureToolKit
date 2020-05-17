export interface BingSearchResponse {
    totalEstimateMatches: number;
    value: ImageResult[];
}

export interface ImageResult {
    name: string;
    thumbnailUrl: string;
}