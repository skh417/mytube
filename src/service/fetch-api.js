class YoutubeFetch {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async search(query) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?chart=mostPopular&part=snippet&maxResults=25&q=${query}&key=${this.key}`,
        this.getRequestOptions
      );
      const result = await response.json();
      return result.items;
    } catch (error) {
      return console.log("error", error);
    }
  }
}

export default YoutubeFetch;
