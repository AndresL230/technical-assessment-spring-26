import './YouTubeEmbed.css';

function YouTubeEmbed({ videoId, title }) {
  return (
    <div className="youtube-embed-container">
      <div className="youtube-embed-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {title && <p className="youtube-caption">{title}</p>}
    </div>
  );
}

export default YouTubeEmbed;
