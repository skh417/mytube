class YoutubeAxios {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async getMostPopular() {
    try {
      const response = await this.youtube.get("videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          regionCode: "KR",
          maxResults: 12,
        },
      });

      return {
        videos: response.data.items,
        nextPageToken: response.data.nextPageToken,
        prevPageToken: response.data.prevPageToken,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async search(query) {
    try {
      const response = await this.youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 27,
          type: "video",
          q: query,
        },
      });

      return response.data.items.map((item) => ({
        ...item,
        id: item.id.videoId,
      }));
    } catch (error) {
      console.log(error);
    }
  }

  async viewMore(nextPageToken) {
    try {
      const response = await this.youtube.get("videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          regionCode: "KR",
          maxResults: 10,
          pageToken: nextPageToken,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default YoutubeAxios;
