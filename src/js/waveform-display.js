const waveformDisplay = url => {

  const handleClick = e => {
    window.wavesurfer.playPause();
  };

  const button = document.querySelector('.waveform-btn');

  if (window.wavesurfer) {
    window.wavesurfer.destroy();
  } else {
    button.addEventListener('click', handleClick);
  }

  const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#fec2c9',
    progressColor: '#ff9e9d'
  });

  wavesurfer.load(url);
  wavesurfer.on('ready', () => {
    wavesurfer.play();
  });

  window.wavesurfer = wavesurfer;
};

export default waveformDisplay;
