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
{metaData: {artist: "jvd", title: "oh sweetest name",}, url: "/assets/audio/osn.mp3"},
{metaData: {artist: "jvd", title: "uninspired; blowing smoke",},url: "/assets/audio/ubs.mp3"},
{metaData: {artist: "jvd", title: "marathon daze",},url: "/assets/audio/mdaze.mp3"},
{metaData: {artist: "jvd", title: "whatever makes you mine",},url: "/assets/audio/wmym.mp3"},
{metaData: {artist: "jvd", title: "you don't know what you're asking",},url: "/assets/audio/ydkw.mp3"},
{metaData: {artist: "buffet", title: "too many things",},url: "/assets/audio/tmt.mp3"},
{metaData: {artist: "buffet", title: "doho",},url: "/assets/audio/doho.mp3"},
{metaData: {artist: "jvd", title: "with every power wide awake",},url: "/assets/audio/wepwa.mp3"},
{metaData: {artist: "jvd", title: "calling all cowards",},url: "/assets/audio/cac.mp3"},
{metaData: {artist: "jvd", title: "mind-reader",},url: "/assets/audio/mind.mp3"},
{metaData: {artist: "jvd", title: "absentee heartbeat",},url: "/assets/audio/heart.mp3"},
{metaData: {artist: "the lonely forest", title: "left hand man",},url: "/assets/audio/lhm.mp3"},
{metaData: {artist: "the lonely forest", title: "fire-breather",},url: "/assets/audio/fire.mp3"},
{metaData: {artist: "the lonely forest", title: "turn off this song and go outside",},url: "/assets/audio/tots.mp3"},
{metaData: {artist: "the lonely forest", title: "we sing in time",},url: "/assets/audio/wsit.mp3"},
{metaData: {artist: "the lonely forest", title: "coyote",}, url: "/assets/audio/cyte.mp3"},
{metaData: {artist: "the lonely forest", title: "blackheart vs captain america",},url: "/assets/audio/bvca.mp3"},
{metaData: {artist: "the lonely forest", title: "far outer banks",},url: "/assets/audio/fob.mp3"},
],

});
    webamp.renderWhenReady(app);
</script>
