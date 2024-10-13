class YoutubeAPIExtension {
    constructor() {
        this.apiKey = '';
    }

    getInfo() {
        return {
            id: 'youtubeAPI',
            name: 'YouTube API',
            color1: '#E52D27',
            color2: '#B31217',
            iconURL: 'https://www.youtube.com/s/desktop/1d05d8a6/img/favicon_32x32.png',
            blocks: [
                {
                    opcode: 'setApiKey',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'set API key [KEY]',
                    arguments: {
                        KEY: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ''
                        }
                    }
                },
                {
                    opcode: 'getSubscriberCount',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[CHANNEL]\'s subscriber count',
                    arguments: {
                        CHANNEL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'UCSN4-8b7bo3_bz_XRS9ZdBQ'  // Default channel ID
                        }
                    }
                },
                {
                    opcode: 'getChannelViews',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[CHANNEL]\'s total views',
                    arguments: {
                        CHANNEL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'UCSN4-8b7bo3_bz_XRS9ZdBQ'  // Default channel ID
                        }
                    }
                },
                {
                    opcode: 'getDescription',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'description of video id [VIDEOID]',
                    arguments: {
                        VIDEOID: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '02ig044-2F0'  // Default video ID
                        }
                    }
                }
            ]
        };
    }

    setApiKey(args) {
        this.apiKey = args.KEY;
    }

    async getSubscriberCount(args) {
        const channelId = args.CHANNEL;
        const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${this.apiKey}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const subscriberCount = data.items[0].statistics.subscriberCount;
            return subscriberCount;
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            return 'Error';
        }
    }

    async getChannelViews(args) {
        const channelId = args.CHANNEL;
        const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${this.apiKey}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const channelViews = data.items[0].statistics.viewCount;
            return channelViews;
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            return 'Error';
        }
    }

    async getDescription(args) {
        const videoId = args.VIDEOID;
        const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${this.apiKey}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const description = data.items[0].snippet.description;
            return description;
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            return 'Error';
        }
    }
}

// Register the extension with TurboWarp
Scratch.extensions.register(new (class {
    constructor() {
        this.extensionInstance = new YoutubeAPIExtension();
    }

    getInfo() {
        return this.extensionInstance.getInfo();
    }

    setApiKey(args) {
        return this.extensionInstance.setApiKey(args);
    }

    async getSubscriberCount(args) {
        return await this.extensionInstance.getSubscriberCount(args);
    }

    async getChannelViews(args) {
        return await this.extensionInstance.getChannelViews(args);
    }

    async getDescription(args) {
        return await this.extensionInstance.getDescription(args);
    }
})());
