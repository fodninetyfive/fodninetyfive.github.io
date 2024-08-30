---
layout: music-jvd
title: "My Music"
---

i made you a mixtape of my best stuff. double-click and listen to some glorious 64kbps mp3s!!!

play it as loud as you can on some of these babys. trust me!

(seems like Safari on Macs and iOS plays songs a bit fast at the start so just bear with it for a few seconds. you might need to nudge the seek bar, too)

<img width="400px" src="/assets/images/speakers.jpg">

<div id="app"></div>
<script src="https://unpkg.com/webamp"></script>
<script>
    const app = document.getElementById("app")
    const webamp = new Webamp({
  initialTracks: [
{metaData: {artist: "The Lonely Forest", title: "Intro",}, url: "/assets/audio/01-intro.m4a"},
{metaData: {artist: "The Lonely Forest", title: "They're On To Something",}, url: "/assets/audio/02-theyre-on-to-something.m4a"},
{metaData: {artist: "The Lonely Forest", title: "Far Outer Banks",}, url: "/assets/audio/03-far-outer-banks.m4a"},
{metaData: {artist: "The Lonely Forest", title: "Two Pink Pills",}, url: "/assets/audio/04-two-pink-pills.m4a"},
{metaData: {artist: "The Lonely Forest", title: "Coyote",}, url: "/assets/audio/05-coyote.m4a"},
{metaData: {artist: "The Lonely Forest", title: "Left Hand Man",}, url: "/assets/audio/06-left-hand-man.m4a"},
{metaData: {artist: "The Lonely Forest", title: "Centennial",}, url: "/assets/audio/07-centennial.m4a"},
{metaData: {artist: "The Lonely Forest", title: "Soil, Silt, And Clay",}, url: "/assets/audio/08-soil,-silt-and-clay.m4a"},
{metaData: {artist: "The Lonely Forest", title: "Tunnels",}, url: "/assets/audio/09-tunnels.m4a"},
{metaData: {artist: "The Lonely Forest", title: "Blackheart vs Captain America",}, url: "/assets/audio/10-blackheart-vs-captain-america.m4a"},
{metaData: {artist: "The Lonely Forest", title: "Let It Go",}, url: "/assets/audio/11-let-it-go.m4a"},
{metaData: {artist: "The Lonely Forest", title: "Turn Off This Song And Go Outside",}, url: "/assets/audio/12-turn-off-this-song-and-go-outside.m4a"},
{metaData: {artist: "The Lonely Forest", title: "I Dont Want To Live There",}, url: "/assets/audio/13-i-dont-want-to-live-there.m4a"},
{metaData: {artist: "The Lonely Forest", title: "We Sing In Time",}, url: "/assets/audio/14-we-sing-in-time.m4a"}
],

});
    webamp.renderWhenReady(app);
</script>
