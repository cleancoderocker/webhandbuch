const testResultElement = document.getElementById('testResult');

const testResult = 0;
let icon = null;

switch (testResult) {
  case 0:
    icon = 'pass.tif';
    break;
  case 1:
    icon = 'info.tif';
    break;
  case 2:
    icon = 'warning.tif';
    break;
  case 3:
    icon = 'error.tif';
    break;
  default:
    icon = 'unknown.tif';
}
testResultElement.src = 'img/' + icon;