export type TrackType = {
    artist:string,
    songUrl:string,
    previewUrl: string,
    title:string
}

export type SpotifyTrack = {
    name: string,
    external_urls: {
        spotify: string
    }
    preview_url: string,
    artists: SpotifyArtist[]
}

export type SpotifyArtist = {
    name:string
}

