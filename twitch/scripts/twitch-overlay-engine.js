function connect() {

    const _adres = new URL(window.location.toLocaleString());
    const _channel = _adres.searchParams.get('channel');
    const _enableCommands = _adres.searchParams.has('commands') ? _adres.searchParams.get('commands') == true : false;
    console.log("Connecting to " + _channel);

    let client = new tmi.Client({
        channels: [_channel]
    });

    //chat
    client.on('message', (channel, tags, message, self) => {
        EvaluateMessage(tags, message, _enableCommands);
    });

    //cheers
    client.on('cheer', (channel, tags, message, self) => {
        EvaluateCheer(tags, message);
    });

    //raids
    client.on('raided', (channel, tags, message, self) => {
        EvaluateRaids(tags, message);
    });

    //rewards
    client.on('redeem', (channel, tags, message, self) => {
        EvaluateRewards(tags, message);
    });

    //subs
    for (var subType of subTypes) {
        client.on(subType, (channel, tags, message, self) => {
            EvaluateSub(subType, tags);
        });
    }

    console.log("Connected")
    client.connect();
}


