import { recommendedTracks } from "../../lib/spotify";

export default async function handler(req, res) {
  try {
    const response = await recommendedTracks();
    const data = await response.json();

    if (!data || !data.tracks) {
      throw new Error("Invalid response from Spotify API");
    }

    const tracks = data.tracks.map((track) => ({
      title: track.name,
      artist: track.artists.map((_artist) => _artist.name).join(", "),
      url: track.external_urls.spotify,
      coverImage: track.album.images[1],
    }));

    // res.setHeader(
    //   "Cache-Control",
    //   "public, s-maxage=86400, stale-while-revalidate=43200"
    // );

    res.setHeader("Cache-Control", "no-store");

    return res.status(200).json(tracks);
  } catch (error) {
    console.error("Error fetching recommended tracks:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// import { recommendedTracks } from "../../lib/spotify";

// const CACHE_DURATION = 60 * 60 * 24; // 1 day in seconds

// export default async function handler(req, res) {
//   try {
//     const response = await recommendedTracks();

//     if (response.status === 429) {
//       const retryAfter = response.headers.get('Retry-After');
//       return res.status(429).json({
//         error: 'Rate limit exceeded. Try again later.',
//         retryAfter: retryAfter ? parseInt(retryAfter, 10) : null,
//       });
//     }

//     if (!response.ok) {
//       throw new Error(`Spotify API error: ${response.status} ${response.statusText}`);
//     }

//     const data = await response.json();

//     if (!data || !data.tracks) {
//       throw new Error("Invalid response from Spotify API");
//     }

//     const tracks = data.tracks.map((track) => ({
//       title: track.name,
//       artist: track.artists.map((_artist) => _artist.name).join(", "),
//       url: track.external_urls.spotify,
//       coverImage: track.album.images[1],
//     }));

//     // Set cache control headers
//     res.setHeader("Cache-Control", `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate=${CACHE_DURATION / 2}`);

//     return res.status(200).json(tracks);
//   } catch (error) {
//     console.error("Error fetching recommended tracks:", error);

//     if (error.message.includes('Rate limit exceeded')) {
//       return res.status(429).json({
//         error: 'Rate limit exceeded. Try again later.',
//       });
//     }

//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// }
