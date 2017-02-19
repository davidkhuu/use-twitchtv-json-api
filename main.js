'use strict';

let channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

let baseUrl = 'https://wind-bow.gomix.me/twitch-api';
let endUrl = '?callback=?';
// make api call
// receive JSON
// parse JSON
// for it for all channels in list

function generateRow(streamer) {
  var url = baseUrl + streamer + endUrl;

  $.getJSON(url, function(data) {
    console.log(data);

    return buildHtml(data);
  });
}

function buildHtml(stream) {
  var channelName = stream.display_name,
      currentGame = stream.game,
      channelURL = stream.url,
      channelLogo = stream.logo,
      streamTitle = stream.status,
      statusColour,
      status;

  // channel online
  if (stream.mature) {
    status = 'online';
    statusColour = '#0a0';
  } else {
    status = 'offline';
    statusColour = '#a00'
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
  generateRow('summit1g');
  generateRow('steel_tv');
  generateRow('qosmonaut');
  generateRow('phantoml0rd');
  generateRow('shroud');
  generateRow('hutch');
});

//getChannelInfo();
