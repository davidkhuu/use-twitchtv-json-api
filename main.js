'use strict';

let channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

let baseUrl = 'https://wind-bow.gomix.me/twitch-api';
let usersPath = '/users/';
let channelsPath = '/channels/';
let streamsPath = '/streams/';

function generateRow(streamer) {
  let url = baseUrl + channelsPath + streamer;
  let streamsUrl = baseUrl + streamsPath + streamer;

  let streamerData = {};
  $.getJSON(url, function(channelResp) {
    streamerData.channel = channelResp;
    $.getJSON(streamsUrl, function(streamResp) {
      streamerData.stream = streamResp.stream;
    });

    return buildHtml(streamerData);
  });
}

function buildHtml(stream) {
  let channelName = stream.channel.display_name;
  let currentGame = stream.channel.game;
  let channelURL = stream.channel.url;
  let channelLogo = stream.channel.logo;
  let streamTitle = stream.channel.status;
  let statusColour;
  let status;

  // channel online
  if (stream.stream) {
    status = 'online';
    statusColour = '#0a0';
  } else {
    status = 'offline';
    statusColour = '#a00';
  }

  let $html = $('<div></div>');
  $html.append(name);

  let $row = $('<div></div>').addClass('row');
  //$row.attr('id', 'entry');

  /*
  let $status = $('<div></div>').addClass('col-xs-1 col-md-1');
  $status.attr('id', 'status');
  $status.css('background-color', statusColour);
  */

  let $logo = $('<div></div>').addClass('col-xs-3 col-md-3');
  let $logoImg = $('<img />');
  $logo.attr('id', 'logo');
  $logoImg.attr('src', channelLogo);
  $logoImg.attr('id', 'stream-logo');
  $logoImg.attr('width', '50%)');
  //$logoImg.attr('height', '40px');
  $logo.append($logoImg);

  let $info = $('<div></div>').addClass('col-xs-9 col-md-9');
  $info.attr('id', 'info');
  $info.append('<p>' + channelName + ' is playing ' + currentGame + '</p>');

  $row.append([$logo, $info]);

  console.log(name);
  $('.container').append($row);
}

$(document).ready(function() {
  generateRow('godazed');
  generateRow('dreamhackcs');
  generateRow('summit1g');
  generateRow('steel_tv');
  generateRow('qosmonaut');
  generateRow('hutch');
});

//getChannelInfo();
