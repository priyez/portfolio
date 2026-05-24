
import { NextResponse } from 'next/server';

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';

async function getAccessToken() {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${Buffer.from(
                `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
            ).toString('base64')}`,
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: SPOTIFY_REFRESH_TOKEN!,
        }),
    });

    return response.json();
}

async function getNowPlaying(accessToken: string) {
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (response.status === 204 || response.status > 400) {
        return null;
    }

    return response.json();
}

export async function GET() {
    try {
        const { access_token } = await getAccessToken();
        const nowPlaying = await getNowPlaying(access_token);

        if (!nowPlaying || !nowPlaying.item) {
            return NextResponse.json({ isPlaying: false });
        }

        const track = {
            isPlaying: nowPlaying.is_playing,
            name: nowPlaying.item.name,
            artist: nowPlaying.item.artists.map((_artist: any) => _artist.name).join(', '),
            album: nowPlaying.item.album.name,
            albumImageUrl: nowPlaying.item.album.images[0].url,
            songUrl: nowPlaying.item.external_urls.spotify,
        };

        return NextResponse.json(track);
    } catch (error) {
        return NextResponse.json({ isPlaying: false });
    }
}
