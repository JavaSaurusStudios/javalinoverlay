function EvaluateMessage(tags, message, allowCommands) {
    console.log(tags['color'] + ":" + tags['display-name'] + ":" + message);
    if (hasProfanity(message)) {
        playProfanityAudio();
    } else if (message.startsWith("!")) {
        if (allowCommands) {
            var sound = "./twitch/audio/" + message.replace("!", "") + ".mp3";
            playChatAudio(sound);
            console.log("Playing " + sound);
        }
    }
}
