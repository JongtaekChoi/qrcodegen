document.addEventListener('DOMContentLoaded', function() {
  const textInput = document.getElementById('textInput');
  const generateBtn = document.getElementById('generateBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const qrcodeDiv = document.getElementById('qrcode');

  let currentQRCode = null;

  generateBtn.addEventListener('click', generateQRCode);
  downloadBtn.addEventListener('click', downloadQRCode);
  
  textInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      generateQRCode();
    }
  });

  async function generateQRCode() {
    const text = textInput.value.trim();
    
    if (!text) {
      alert('Please enter some text or URL');
      return;
    }

    try {
      generateBtn.disabled = true;
      generateBtn.textContent = 'Generating...';
      
      qrcodeDiv.innerHTML = '';
      
      currentQRCode = await QRCode.toCanvas(text, {
        width: 200,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      
      qrcodeDiv.appendChild(currentQRCode);
      downloadBtn.style.display = 'block';
      
    } catch (error) {
      console.error('Error generating QR code:', error);
      alert('Error generating QR code. Please try again.');
    } finally {
      generateBtn.disabled = false;
      generateBtn.textContent = 'Generate QR Code';
    }
  }

  function downloadQRCode() {
    if (!currentQRCode) return;
    
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = currentQRCode.toDataURL();
    link.click();
  }

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (tabs[0] && tabs[0].url && tabs[0].url !== 'chrome://newtab/') {
      textInput.value = tabs[0].url;
    }
  });
});