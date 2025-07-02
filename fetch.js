    const projectId = 1183363270;
    const proxyUrl = 'https://corsproxy.io/?';
    const apiUrl = `https://api.scratch.mit.edu/projects/${projectId}`;
    console.log('Url: ' + apiUrl);
    fetch(proxyUrl + apiUrl)
      .then(res => res.json())
      .then(data => {
        document.getElementById('description').textContent = data.instructions;
      })
      .catch(err => {
        console.error('Failed to fetch data:', err);
        document.getElementById('description').textContent = 'Could not load description.';
      });