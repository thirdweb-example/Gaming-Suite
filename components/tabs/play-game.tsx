export default function PlayGame() {
  return (
    <div className="aspect-video bg-[#1A1A1A] rounded-lg overflow-hidden relative">
      <div className="absolute inset-0">
        <iframe
          src="https://joe-thirdweb.github.io/Unified-Takeflight-build/"
          title="Take Flight Game"
          className="w-full h-full border-0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          scrolling="no"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  )
}

