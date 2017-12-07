import waveformDisplay from './waveform-display';
import chart from './chart';

export default tracks => {
  const list = document.querySelector('.songs-list');

  tracks.forEach((item, i) => {
    const track = item.track;
    const li = document.createElement('li');
    li.classList.add('song-item');
    li.dataset.trackId = i;
    const song = document.createElement('p');
    song.classList.add('song-title');
    song.innerText = track.artists[0].name;
    const artist = document.createElement('p');
    artist.classList.add('song-artist');
    artist.innerText = track.name;
    li.appendChild(song);
    li.appendChild(artist);
    list.appendChild(li);
  });

  document.getElementById('sidebar').appendChild(list);

  const handleClick = e => {
    const node = e.target;
    const idx = node.dataset.trackId;
    const track = tracks[idx].track;
    const url = track.preview_url;
    waveformDisplay(url);
  };

  list.addEventListener('click', handleClick);
};
