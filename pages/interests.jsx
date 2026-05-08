import React, { useState, useEffect, useRef } from "react";
import ReactTypingEffect from "react-typing-effect";
import { FaBook, FaSpotify } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel css
import { Carousel } from "react-responsive-carousel"; // import carousel component
import Image from "next/image";
import mbf from "../public/assets/covers/newer-mbf.png";
import ne from "../public/assets/covers/huis-close.png";
import wh from "../public/assets/covers/new-wh.png";

const Interests = () => {
  const [tracks, setTracks] = useState([]);
  const [isVisible, setIsVisible] = useState(false); // fade in state variable
  const interestsRef = useRef(null);
  const [songData, setSongData] = useState({
    isPlaying: false,
    title: "",
    artist: "",
    album: "",
    albumImageUrl: "",
    songUrl: "",
  });

  const TrackSection = ({ title, url, artist, coverImage }) => {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center p-4 rounded-lg shadow-md transition-transform transform hover:-translate-y-1"
      >
        <div className="flex items-center">
          <img
            src={coverImage.url}
            alt={`Cover for ${title}`}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <p className="text-lg font-semibold">{title}</p>
            <p className="text-gray-600">{artist}</p>
          </div>
        </div>
      </a>
    );
  };

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, options);

    observer.observe(interestsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
  const fetchTracks = async () => {
    try {
      const res = await fetch("/api/tracks");
      const data = await res.json();
      setTracks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Failed to fetch tracks:', err);
      setTracks([]);
    }
  };
  fetchTracks();
}, []);

  useEffect(() => {
    async function getSongData() {
      const res = await fetch("/api/now-playing");
      const data = await res.json();
      setSongData(data);
    }

    const intervalId = setInterval(() => {
      getSongData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const { isPlaying, title, artist, album, albumImageUrl, songUrl } = songData;
  const validTracks = Array.isArray(tracks) ? tracks.filter((track) => track?.url) : [];
  const validSongUrl = isPlaying && songUrl && typeof songUrl === "string";

  return (
    <div id="interests" className="w-full bg-[#f7faf7]" ref={interestsRef}>
      <div className="max-w-[1240px] mx-auto py-20 px-4 sm:px-6">
        <div className="rounded-[2rem] bg-white/95 border border-slate-200 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.25)] p-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="space-y-6">
            <h2 className="uppercase text-xl md:text-3xl text-[#3F8B7D]">
              Current state of Anushka
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              In my free time, I love consuming media, whether it be reading a new
              historical fiction book or creating random but perfectly collated
              music playlists. Here's what I'm diving into at the moment!
            </p>
          </div>
          </div>
          </div>
      </div>
      <div className="max-w-[1240px] mx-auto py-5 px-4 sm:px-6">
        <div className="rounded-[2rem] bg-white/95 border border-slate-200 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.15)] p-8">
          <div className="max-w-6xl mx-auto flex flex-col justify-center h-full">
          <div className="max-w-6xl p-4">
            <p className="text-center  pt-2 max-w-2xl mx-auto md:max-w-none">
              As a lover of music and algorithms, Spotify has my heart. Enjoy
              what I'm listening to, courtesy of some Spotify Web API
              integration!
            </p>
            <div className="flex justify-center items-center py-4">
              <FaSpotify className=" mr-2" />
              <p className="text-center text-xs sm:text-lg text-[#68B0AB] text-md">
                My top tracks from the past month, updated daily:
              </p>
            </div>
          </div>
          {/* <div className="flex gap-4 justify-center sm:flex-row items-center my-3 mx-auto">
            {tracks.slice(0, 3).map((track) => (
              <TrackSection
                key={track.trackId}
                title={track.title}
                url={track.url}
                artist={track.artist}
                coverImage={track.coverImage}
              />
            ))}
          </div>
          <div className="flex gap-4 justify-center sm:flex-row items-center my-3 mx-auto">
            {tracks.slice(3, 5).map((track) => (
              <TrackSection
                key={track.trackId}
                title={track.title}
                url={track.url}
                artist={track.artist}
                coverImage={track.coverImage}
              />
            ))}
          </div> */}

          <div className="rounded-[1.5rem] bg-[#F9FCF9] border border-slate-200 p-6 shadow-sm mb-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">Top tracks this month</h3>
                <p className="text-sm text-slate-500 mt-1">
                  These are the songs I’ve been listening to most over the last 30 days.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#E6F4EF] px-4 py-2 text-sm font-medium text-[#2F6A5F] shadow-sm">
                <FaSpotify />
              </div>
            </div>
          </div>
          {validTracks.length > 0 ? (
            <>
              <div className="flex flex-col gap-8 justify-center sm:flex-row items-center my-3 mx-auto">
                {validTracks.slice(0, 3).map((track, index) => (
                  <iframe
                    key={`track-${index}`}
                    src={`https://open.spotify.com/embed?uri=${encodeURIComponent(track.url)}`}
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    className={`transform ${isVisible ? "fade-upwards" : ""}`}
                  ></iframe>
                ))}
              </div>
              <div className="flex flex-col gap-8 justify-center sm:flex-row items-center my-3 mx-auto">
                {validTracks.slice(3, 6).map((track, index) => (
                  <iframe
                    key={`track-3-${index}`}
                    src={`https://open.spotify.com/embed?uri=${encodeURIComponent(track.url)}`}
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    className={`transform ${isVisible ? "fade-upwards" : ""}`}
                  ></iframe>
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-sm text-slate-500 py-4">
              No Spotify top tracks available right now.
            </p>
          )}
          <div className="mt-12 rounded-[1.75rem] bg-[#effaf3] border border-[#B8E1C7] p-6 shadow-lg">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">Now playing</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Live Spotify playback status.
                </p>
              </div>
            </div>
            <div className="mt-6">
              {validSongUrl ? (
                <div className="rounded-[1.75rem] overflow-hidden border border-slate-200 shadow-xl bg-slate-950">
                  <div className="p-5 text-white">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Now playing</p>
                    <p className="mt-2 text-lg font-semibold">{title || "Unknown track"}</p>
                    <p className="text-sm text-slate-300">{artist || "Unknown artist"}</p>
                    {album ? <p className="text-sm text-slate-400">{album}</p> : null}
                  </div>
                  <iframe
                    src={`https://open.spotify.com/embed?uri=${encodeURIComponent(songUrl)}`}
                    className="w-full h-44"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
              ) : (
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-center text-slate-600 shadow-sm">
                  No song is currently playing.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto py-20 px-4 sm:px-6">
        <div className="relative w-full rounded-[2rem] bg-white/95 border border-slate-200 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.15)] p-8">
          <div className="flex flex-col items-center gap-4 pb-6 border-b border-slate-200">
            <div className="inline-flex items-center gap-3 rounded-full bg-[#E6F4EF] px-4 py-2 text-sm font-semibold text-[#2F6A5F] shadow-sm">
              <FaBook /> Bookshelf highlights
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-slate-900">
                A stroll through my bookshelf: my latest and greatest reads
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Short thoughts on stories that have stuck with me recently.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-screen-lg lg:h-[75%] pb-20 mt-8">
            <Carousel
              showArrows={true}
              showThumbs={false}
              className="mx-auto max-w-screen-lg"
            >
              <div className="carousel-item">
                <Image src={mbf} alt="Image mbf" width="700" height="700" />
                <p className="legend text-xs sm:text-lg font-bold mt-2 ">
                  <i>My Brilliant Friend</i>, set in the 1950s, is the first of
                  <i> The Neopolitan Novels</i>, a quartet that follows the
                  entire lives of two women who try to break free from their
                  stultifying working class Neopolitan neighborhood. Spanning
                  their adolescene, <i>MBF</i> really immerses you in the era; I
                  recommend the whole series!
                </p>
              </div>
              <div className="carousel-item">
                <Image src={ne} alt="Image ne" width="1000" height="1000" />
                <p className="legend text-sm sm:text-lg font-bold mt-2 ">
                  Read in the summer before college, <i>No Exit</i> was a great
                  look into the chaos of existentialism. Short and sweet, it
                  really packs a punch. Truly left me thinking "huh... cool".{" "}
                </p>
              </div>
              <div className="carousel-item">
                <Image src={wh} alt="Image wh" width="500" height="500" />
                <p className="legend text-sm sm:text-lg font-bold mt-2">
                  <i>Wuthering Heights</i> has been my favorite novel since I
                  was in 9th grade. I loved the drama, the dark and dreary vibe,
                  the detail on mundane affairs. I definitely found it a very
                  approachable read for being a 'classic,' and am currently in
                  the middle of a re-read.{" "}
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
    </div>
  );  
};
export default Interests;
