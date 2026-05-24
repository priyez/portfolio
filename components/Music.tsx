
'use client';

import React, { useState, useEffect } from 'react';

interface Track {
    isPlaying: boolean;
    name?: string;
    artist?: string;
    album?: string;
    albumImageUrl?: string;
    songUrl?: string;
}

export default function Music() {
    const [track, setTrack] = useState<Track | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNowPlaying() {
            try {
                const response = await fetch('/api/spotify');
                const data = await response.json();
                setTrack(data);
            } catch (error) {
                console.error('Error fetching now playing:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchNowPlaying();
        const interval = setInterval(fetchNowPlaying, 30000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="mt-2">
                <div className="mt-3 flex items-center gap-3">
                    <span className="text-sm font-light">Loading...</span>
                </div>
            </div>
        );
    }

    if (!track || !track.isPlaying) {
        return (
            <div className="mt-2">
                <div className="mt-0 flex items-center gap-3">
                 
                    <span className="text-base font-light">
                        Not currently listening
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-2">
            <p className="mt-3 text-base font-light">
                Currently listening to&nbsp;
                <a
                    href={track.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="capitalize hover:underline"
                >
                    {track.name}
                </a>
                &nbsp;-&nbsp;
                <span className="capitalize opacity-60">
                    {track.artist}
                </span>
            </p>
        </div>
    );
}
