import {topTracks} from "../../lib/spotify";


export default async function handler(req, res) {
    const response = await topTracks();
    const { items } = await response.json();
  
    const tracks = items.map((track) => ({
      title: track.name,
      trackId: track.id,
      artist: track.artists.map((_artist) => _artist.name).join(", "),
      artistId: track.artists[0].id,
      url: track.external_urls.spotify,
      coverImage: track.album.images[1],
    }));
     
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=86400, stale-while-revalidate=43200"
    );
  
    return res.status(200).json(tracks);
  }