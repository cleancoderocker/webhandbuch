const testResultElement = document.getElementById('testResult');

const testResult = 0;
let icon = null;

switch (testResult) {
  case 0:
    icon = 'pass.png';
    break;
  case 1:
    icon = 'info.png';
    break;
  case 2:
    icon = 'warning.png';
    break;
  case 3:
    icon = 'error.png';
    break;
  default:
    icon = 'unknown.png';
}
testResultElement.src = 'img/' + icon;