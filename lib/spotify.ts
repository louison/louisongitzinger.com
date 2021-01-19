import querystring from 'querystring';

const {
    SPOTIFY_CLIENT_ID: client_id,
    SPOTIFY_CLIENT_SECRET: client_secret,
    SPOTIFY_REFRESH_TOKEN: refresh_token
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently_played`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token
        })
    });

    return response.json();
};

const getEndpoint = async (url: string) => {
    const {access_token} = await getAccessToken();
    return fetch(url, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
}

export const getNowPlaying = async () => {
    return await getEndpoint(NOW_PLAYING_ENDPOINT);
};
export const getTopTracks = async () => {
    return await getEndpoint(TOP_TRACKS_ENDPOINT);
};

export const getRecentlyPlayed = async () => {
    return await getEndpoint(RECENTLY_PLAYED_ENDPOINT);
};

