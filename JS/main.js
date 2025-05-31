async function fetchTeraBoxData() {
  const url = document.getElementById('urlInput').value;
  if (!url) return alert("Please paste a valid URL");

  try {
    const apiURL = `https://terabox.sg61x.workers.dev/?url=${encodeURIComponent(url)}`;
    const response = await fetch(apiURL);
    const json = await response.json();

    if (json.status === 'success') {
      const data = json.data.structure;
      document.getElementById('result').style.display = 'block';
      document.getElementById('thumb').src = data.thumb;
      document.getElementById('fileName').textContent = data.file_name;
      document.getElementById('size').textContent = data.size;
      document.getElementById('videoPlayer').src = data.stream_url;
      document.getElementById('downloadLink').href = data.direct_link;
    } else {
      alert("Failed to fetch data");
    }
  } catch (err) {
    console.error(err);
    alert("Error occurred while fetching data");
  }
}
