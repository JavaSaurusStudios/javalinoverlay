function EvaluateMessage(tags,message) {
    console.log(tags['color']+":"+tags['display-name']+":"+ message);
    if (hasProfanity(message)) {
        playProfanityAudio();
    } else if (message.startsWith("!")) {
        var sound = "./twitch/audio/chat-alert/" + message.replace("!", "") + ".mp3";
        playChatAudio(sound);
        console.log("Playing " + sound);
    }
}