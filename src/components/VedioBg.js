// import {useEffect, useState} from "react";
// import { API_OPRIONS } from "../utils/constants";
// import useTrailerVd  from "../hooks/useTrailerVd";
// import { useSelector } from "react-redux";
// import YouTube from "react-youtube";


// const VedioBg = ({movieId}) => {

//   const trailerVideo = useSelector(
//     (store) => store.movies?.movieList?.trailerVideo
//   );
//   const [progress, setProgress] = useState(0);

//   // const trailerVideos = trailerVideo && trailerVideo.length > 0 ? trailerVideo : null

//   const opts = {
//     width: "100%",
//     height: "100%",
//     playerVars: {
//       autoplay: 1,
//       mute: 1,
//       controls: 0,       // ✅ hides YouTube controls
//       modestbranding: 1, // ✅ removes YouTube branding
//       rel: 0,            // ✅ prevents related videos
//       showinfo: 0,
      
//     },
//   };
//   const onReady = (event) => {
//     event.target.playVideo();
//     // Track progress every second
//     setInterval(() => {
//       const duration = event.target.getDuration();
//       const current = event.target.getCurrentTime();
//       setProgress((current / duration) * 100);
//     }, 1000);
//   };

//   const onEnd = () => {
//     console.log("Video ended — show recommendations here");
//     // 👉 replace with your recommendation component
//   }
  
  
//   useTrailerVd(movieId)

//   return (
//     <div className=" w-screen aspect-video">
//       <YouTube  className="w-screen aspect-video"

//         videoId={trailerVideo?.key}
//         opts={opts}
//         onReady={onReady}
//         onEnd={onEnd}
//       />
//       {/* Progress bar like Netflix */}
//       <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
//         <div
//           className="h-1 bg-red-600 transition-all duration-300"
//           style={{ width: `${progress}%` }}
//         />
//       </div>
//     // </div>
// //   <div className="relative w-screen aspect-video overflow-hidden">
// //   <iframe
// //     className="absolute top-0 left-0 w-full h-full border-0"
// //     src={
// //       "https://www.youtube.com/embed/" +
// //       trailerVideo?.key +
// //       "?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0"
// //     }
// //     title="YouTube video player"
// //     allow="autoplay; encrypted-media"
// //   />
// // </div>

//   );
 
  
// };

// export default VedioBg;

import {useEffect, useState} from "react";
import { API_OPRIONS } from "../utils/constants";
import useTrailerVd from "../hooks/useTrailerVd";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";

const VedioBg = ({movieId}) => {
  const trailerVideo = useSelector(
    (store) => store.movies?.movieList?.trailerVideo
  );
  
  const [progress, setProgress] = useState(0);
  const [showTrailer, setShowTrailer] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [isMainVideoEnded, setIsMainVideoEnded] = useState(false);
  const [videoData, setVideoData] = useState(null);

  // Fetch additional trailer data if needed
  useTrailerVd(movieId);

  // Get current video based on state
  const getCurrentVideo = () => {
    if (!trailerVideo) return null;
    
    if (showTrailer) {
      // Show trailer video (could be different from main)
      return trailerVideo;
    } else {
      // Show main video
      return trailerVideo;
    }
  };

  const currentVideo = getCurrentVideo();

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      mute: showTrailer ? 0 : 1, // Audio ON for trailer, OFF for main video
      controls: showTrailer ? 1 : 0, // Show controls for trailer
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
      fs: 1, // Allow fullscreen
      cc_load_policy: 0, // Hide captions by default
    },
  };

  const onReady = (event) => {
    setCurrentPlayer(event.target);
    event.target.playVideo();
    
    // Track progress every second
    const progressInterval = setInterval(() => {
      if (event.target && event.target.getDuration) {
        const duration = event.target.getDuration();
        const current = event.target.getCurrentTime();
        if (duration > 0) {
          setProgress((current / duration) * 100);
        }
      }
    }, 1000);

    // Store interval to clear later
    event.target.progressInterval = progressInterval;
  };

  const onEnd = () => {
    console.log("Video ended");
    
    if (!showTrailer) {
      // Main video ended - show trailer after delay
      setIsMainVideoEnded(true);
      setTimeout(() => {
        setShowTrailer(true);
        setProgress(0);
        setIsMainVideoEnded(false);
      }, 2000);
    } else {
      // Trailer ended - could loop back to main or show recommendations
      console.log("Trailer ended - show recommendations or loop back");
      // Optional: Reset to main video
      // setShowTrailer(false);
      // setProgress(0);
    }
  };

  const onStateChange = (event) => {
    // Track various player states
    const states = {
      '-1': 'unstarted',
      0: 'ended',
      1: 'playing',
      2: 'paused',
      3: 'buffering',
      5: 'cued'
    };
    
    console.log('Player state:', states[event.data] || event.data);
  };

  const onError = (event) => {
    console.error('YouTube player error:', event);
  };

  // Clean up intervals on unmount
  useEffect(() => {
    return () => {
      if (currentPlayer && currentPlayer.progressInterval) {
        clearInterval(currentPlayer.progressInterval);
      }
    };
  }, [currentPlayer]);

  // Manual controls
  const togglePlayPause = () => {
    if (currentPlayer) {
      const state = currentPlayer.getPlayerState();
      if (state === 1) { // playing
        currentPlayer.pauseVideo();
      } else {
        currentPlayer.playVideo();
      }
    }
  };

  const toggleMute = () => {
    if (currentPlayer) {
      if (currentPlayer.isMuted()) {
        currentPlayer.unMute();
      } else {
        currentPlayer.mute();
      }
    }
  };

  const switchToTrailer = () => {
    setShowTrailer(true);
    setProgress(0);
  };

  const backToMain = () => {
    setShowTrailer(false);
    setProgress(0);
  };

  if (!currentVideo?.key) {
    return (
      <div className="w-screen aspect-video bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading video...</div>
      </div>
    );
  }

  return (
    <div className="w-screen aspect-video overflow-hidden bg-black">
      {/* Video ended overlay */}
      {isMainVideoEnded && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <h2 className="text-2xl mb-4">Video Ended</h2>
            <p className="text-lg mb-6">Loading trailer...</p>
            <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      )}

      {/* YouTube Player */}
      <div className="w-full h-full">
        <YouTube
          key={`${currentVideo.key}-${showTrailer}`} // Force re-render when switching
          className="w-full h-full"
          videoId={currentVideo.key}
          opts={opts}
          onReady={onReady}
          onEnd={onEnd}
          onStateChange={onStateChange}
          onError={onError}
        />
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700/50 z-10">
        <div
          className="h-full bg-red-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Control overlay */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
      

        <div className="flex items-center gap-2">
          {/* {showTrailer && (
            <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold">
              TRAILER
            </div>
          )} */}
          
          <button
            onClick={toggleMute}
            className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm my-2.5"
          >
            {showTrailer ? "🔊" : "🔇"}
          </button>
          
          {/* <button
            onClick={togglePlayPause}
            className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            ⏯️
          </button> */}
        </div>
      </div>

      {/* Video info overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="bg-gradient-to-r from-black/60 to-transparent p-4 rounded-lg backdrop-blur-sm">
          <h3 className="text-white text-lg font-semibold">
            {showTrailer ? "🎬 Trailer Playing" : "📽️ Main Content"}
          </h3>
          <p className="text-gray-300 text-sm">
            {showTrailer 
              ? currentPlayer?.isMuted() 
                ? "🔇 Click 'Enable Audio' or mute button to hear trailer audio"
                : "🔊 Audio is ON - Enjoying the trailer!"
              : "📽️ Main video playing silently - Click 'Watch Trailer' for audio preview"
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default VedioBg;
