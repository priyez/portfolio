
'use client';

import React, { useState, useEffect, useMemo } from 'react';

interface Track {
    isPlaying: boolean;
    name?: string;
    artist?: string;
    album?: string;
    albumImageUrl?: string;
    songUrl?: string;
}

const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
    '#F8B500', '#FF69B4', '#00CED1', '#FF7F50', '#9370DB'
];

function useRandomColor(seed: string) {
    return useMemo(() => {
        let hash = 0;
        for (let i = 0; i < seed.length; i++) {
            hash = seed.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % colors.length;
        return colors[index];
    }, [seed]);
}

export default function Music() {
    const [track, setTrack] = useState<Track | null>(null);
    const [loading, setLoading] = useState(true);
    const trackColor = useRandomColor(track?.name || 'default');

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
                    style={{ color: trackColor }}
                >
                    {track.name}
                </a>
                &nbsp;-&nbsp;
                <span className="capitalize opacity-60"  style={{ color: trackColor }}>
                    {track.artist}
                </span>
            </p>
        </div>
    );
}
