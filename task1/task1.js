/**
знайдіть всі <h2> з класом head,
зробіть для них зелений колір фону,
потім серед знайдених елементів знайдіть елементи з класом inner
і поставте їм розмір шрифту 35px (не вносьте змін до html-файлу)
 */

$(document).ready(function () {
  var $headings = $('h2.head');

  $headings.css('background-color', 'green');

  var $innerElements = $headings.find('.inner');

  $innerElements.css('font-size', '35px');
});
