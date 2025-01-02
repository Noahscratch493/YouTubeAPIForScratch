# YouTube API Scratch Extension

The **YouTube API Scratch Extension** allows you to interact with the YouTube API directly from Scratch projects. You can retrieve a YouTube channel's subscriber count, view count, and even video descriptions using this extension.

## Features
- **Set API Key**: Configure your API key for accessing YouTube data.
- **Get Subscriber Count**: Retrieve the subscriber count of a YouTube channel.
- **Get Channel Views**: Retrieve the total views of a YouTube channel.
- **Get Video Description**: Retrieve the description of a YouTube video by its video ID.

## Blocks

The extension provides the following blocks:

1. **set API key [KEY]**  
   Sets the YouTube API key for subsequent API requests.

2. **[CHANNEL]'s subscriber count**  
   Reports the subscriber count of the given YouTube channel.

3. **[CHANNEL]'s total views**  
   Reports the total views of the given YouTube channel.

4. **description of video id [VIDEOID]**  
   Reports the description of the YouTube video with the provided video ID.

## Requirements
- **YouTube API Key**: To use this extension, you'll need a valid YouTube Data API v3 key. You can get one from the [Google Developer Console](https://console.developers.google.com/).
- **Internet Connection**: The extension requires an active internet connection to interact with the YouTube API.

## Setup

1. Obtain your YouTube API key from the [Google Developer Console](https://console.developers.google.com/).
2. Use the `set API key [KEY]` block to configure your API key in your Scratch project.
3. Use the blocks to retrieve information about YouTube channels and videos.

## Example Usage

1. **Set your API key**:
   - Use the `set API key [YOUR_API_KEY]` block to input your YouTube API key.

2. **Get a channel's subscriber count**:
   - Use the `[CHANNEL] 's subscriber count` block to get the number of subscribers of a YouTube channel. Replace `[CHANNEL]` with the channel's ID.

3. **Get the total views of a channel**:
   - Use the `[CHANNEL] 's total views` block to get the total view count of a channel.

4. **Get the description of a video**:
   - Use the `description of video id [VIDEOID]` block to get the description of a YouTube video. Replace `[VIDEOID]` with the video's unique ID.

## Example Code:

```scratch
when green flag clicked
set API key to [YOUR_API_KEY]
set [channel ID v] to [UCSN4-8b7bo3_bz_XRS9ZdBQ]
say (join (Channel ID) (join('s Subscriber count is ) (join ((Channel ID)'s Subscriber Count)
```

## How to Use the Extension in TurboWarp

You can use the YouTube API Scratch Extension directly in the TurboWarp editor by following this link:

[Use the YouTube API Scratch Extension in TurboWarp](https://turbowarp.org/editor?extension=+https://noahscratch493.github.io/YouTubeAPIForScratch/YoutubeAPIScratch.js)

Simply click the link and start using the extension in your project!

## Notes

- Ensure you use a valid YouTube API key. Without a key, the blocks will not work.
- The default values for channel ID and video ID are set to some common examples for easy testing.
- You may encounter API rate limits depending on your usage. Ensure you stay within the API quota limits set by Google.

## License

This project is open-source and licensed under the MIT License.
