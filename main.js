// Load configuration and apply to the page. If loading fails, log the error and apply sensible defaults.
fetch("C:\Users\Amulya HN\OneDrive\Desktop\runtimerebels\config\club.json")
  .then(res => {
    if (!res.ok) throw new Error(`Failed to load config (status ${res.status})`);
    return res.json();
  })
  .then(data => {
    document.title = data.club_name || document.title;
    const clubEl = document.getElementById("clubName");
    if (clubEl) clubEl.textContent = data.club_name || clubEl.textContent;
    const tagEl = document.getElementById("tagline");
    if (tagEl) tagEl.textContent = data.tagline || tagEl.textContent;
    document.documentElement.style.setProperty('--theme-color', data.theme_color || '#4F46E5');
  })
  .catch(err => {
    console.error('Failed to load config/club.json:', err);
    // Fallback defaults so the page still displays usable content.
    const fallback = {
      club_name: 'RutiMe Rebels',
      tagline: 'Where innovation meets rebellion',
      theme_color: '#4F46E5'
    };
    document.title = fallback.club_name;
    const clubEl = document.getElementById("clubName");
    if (clubEl) clubEl.textContent = fallback.club_name;
    const tagEl = document.getElementById("tagline");
    if (tagEl) tagEl.textContent = fallback.tagline;
    document.documentElement.style.setProperty('--theme-color', fallback.theme_color);
  });
