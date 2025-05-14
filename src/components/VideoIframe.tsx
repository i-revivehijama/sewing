"use client";

const VideoIframe = () => {
  const videoUrl =
    "https://www.youtube.com/embed/Z4gunD5Wbi8?autoplay=1&rel=0&modestbranding=1";

  return (
    <iframe
      src={videoUrl}
      title="Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full border-none rounded-lg"
    />
  );
};

export default VideoIframe;
