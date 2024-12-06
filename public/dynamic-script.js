(function () {
    const targetButton = document.querySelector('#dynamic-button');
  
    if (!targetButton) return;
  
    fetch('https://your-app-domain.com/api/get-profiles?buttonId=button-123')
      .then((res) => res.json())
      .then((profiles) => {
        if (profiles.length === 0) return;
  
        const profile = profiles[Math.floor(Math.random() * profiles.length)];
  
        targetButton.style.backgroundColor = profile.color;
        targetButton.style.fontSize = profile.fontSize;
        targetButton.textContent = profile.text;
  
        targetButton.addEventListener('click', () => {
          fetch('https://your-app-domain.com/api/track-performance', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ profileId: profile.id }),
          });
        });
      })
      .catch(console.error);
  })();
  