/// <reference types="chrome" />

import QRCode from 'qrcode';

document.addEventListener('DOMContentLoaded', function() {
  const textInput = document.getElementById('textInput') as HTMLTextAreaElement;
  const generateBtn = document.getElementById('generateBtn') as HTMLButtonElement;
  const downloadBtn = document.getElementById('downloadBtn') as HTMLButtonElement;
  const qrcodeDiv = document.getElementById('qrcode') as HTMLDivElement;

  let currentQRCode: HTMLCanvasElement | null = null;

  generateBtn.addEventListener('click', generateQRCode);
  downloadBtn.addEventListener('click', downloadQRCode);
  
  textInput.addEventListener('keypress', function(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      generateQRCode();
    }
  });

  async function generateQRCode(): Promise<void> {
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
      
      if (currentQRCode) {
        qrcodeDiv.appendChild(currentQRCode);
      }
      downloadBtn.style.display = 'block';
      
    } catch (error) {
      console.error('Error generating QR code:', error);
      alert('Error generating QR code. Please try again.');
    } finally {
      generateBtn.disabled = false;
      generateBtn.textContent = 'Generate QR Code';
    }
  }

  function downloadQRCode(): void {
    if (!currentQRCode) return;
    
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = currentQRCode.toDataURL();
    link.click();
  }

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs: chrome.tabs.Tab[]) {
    if (tabs[0] && tabs[0].url && tabs[0].url !== 'chrome://newtab/') {
      textInput.value = tabs[0].url;
      // 자동으로 현재 URL의 QR 코드 생성
      generateQRCode();
    }
  });
});