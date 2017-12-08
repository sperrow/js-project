import waveformDisplay from './waveform-display';
import chart from './chart';

export default (tracks, data) => {
  const list = document.querySelector('.songs-list');

  tracks.forEach((item, i) => {
    const track = item.track;
    const li = document.createElement('li');
    li.classList.add('song-item');
    li.dataset.trackId = i;
    const img = document.createElement('img');
    img.classList.add('song-img');
    img.src = track.album.images[2].url;
    const container = document.createElement('div');
    container.classList.add('song-text');
    const song = document.createElement('p');
    song.classList.add('song-title');
    song.innerText = track.name;
    const artist = document.createElement('p');
    artist.classList.add('song-artist');
    artist.innerText = track.artists[0].name;
    li.appendChild(img);
    li.appendChild(container);
    container.appendChild(song);
    container.appendChild(artist);
    list.appendChild(li);
  });

  document.getElementById('sidebar').appendChild(list);

  const handleClick = e => {
    const node = e.target;
    const liEls = document.querySelectorAll('.song-item');
    Array.from(liEls).forEach(li => {
      li.classList.remove('active');
    });
    node.classList.add('active');
    const idx = node.dataset.trackId;
    const track = tracks[idx].track;
    const h2 = document.querySelector('.now-playing');
    h2.innerText = `${track.name} - ${track.artists[0].name}`;
    const spotifyLink = document.querySelector('.spotify-btn');
    spotifyLink.href = track.external_urls.spotify;

    document.querySelector('#results').classList.add('active');

    const url = track.preview_url;
    waveformDisplay(url);

    const audioFeatures = data.audio_features;
    chart(audioFeatures[idx]);
  };

  list.addEventListener('click', handleClick);
};
