"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDateTime = exports.getDate = void 0;
var formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
};
var getDate = function getDate(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return [year, month, day].map(formatNumber).join('-');
};
exports.getDate = getDate;
var getDateTime = function getDateTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var dateStr = [year, month, day].map(formatNumber).join('-');
  var timeStr = [hours, minutes, seconds].map(formatNumber).join(':');
  return dateStr + ' ' + timeStr;
};
exports.getDateTime = getDateTime;