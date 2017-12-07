export default url => {
  const button = document.querySelector('.waveform-btn');
  button.classList.add('active');

  const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple'
  });
  wavesurfer.load(url);
  wavesurfer.on('ready', () => {
    wavesurfer.play();
  });

  button.addEventListener('click', e => {
    const playing = button.children[0];
    const paused = button.children[1];
    if (playing.classList.contains('active')) {
      playing.classList.remove('active');
      paused.classList.add('active');
    } else {
      paused.classList.remove('active');
      playing.classList.add('active');
    }
    wavesurfer.playPause();
  });
};
