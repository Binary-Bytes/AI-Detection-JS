# AI Detection Javascript

<div>

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/Binary-Bytes/AI-Detection-JS.svg)](https://github.com/Binary-Bytes/AI-Detection-JS/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Binary-Bytes/AI-Detection-JS.svg)](https://github.com/Binary-Bytes/AI-Detection-JS/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

</div>

---

<p>
    AI Detection Using Javascript and Handtracking.js
</p>

## Table of Contents

- [About](#about)
- [Usage](#usage)

## About

This Project Detects All Faces, Hand, etc using Webcam, But It Needs Permission

## Usage

Simply Clone This Repo or Download Source Code and Launch index.html<br />
This Project Plays a Buzzer Sound Wehenever It Detects Something and Also Shows Boxes Around It<br /><br />

```
// Comment Line No. 55 If You Don't Want It To Play Buzzer Sound
audio.play(); // Comment This Line

// Comment Line No. 52 If You Don't Want It To Draw Boxes, Because It Lags A Lot
model.renderPredictions(predictions, canvas, context, video); // Comment This Line
```