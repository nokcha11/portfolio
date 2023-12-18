function copyToClipboard(element) {
  const textToCopy = element.innerText;

  // Create a textarea element
  const tempInput = document.createElement('textarea');
  tempInput.value = textToCopy;

  // Append the textarea element to the body
  document.body.appendChild(tempInput);

  // Select the text in the textarea
  tempInput.select();

  // Execute the "copy" command
  document.execCommand('copy');

  // Remove the textarea element from the body
  document.body.removeChild(tempInput);

  // Show an alert
  alert('복사되었습니다: ' + textToCopy);
}
