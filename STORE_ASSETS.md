# Chrome Web Store 배포 가이드

## 필요한 자료

### 1. 확장 프로그램 정보
- **이름**: QR Code Generator - Quick & Simple
- **카테고리**: Productivity
- **언어**: 한국어, 영어

### 2. 설명문 (Store Description)

**짧은 설명 (132자 제한):**
```
Instantly generate QR codes for any text or URL. Auto-detects current page and provides one-click download.
```

**자세한 설명:**
```
🚀 Quick & Simple QR Code Generator

Generate QR codes instantly for any text, URL, or the current webpage you're visiting!

✨ Key Features:
• 🔄 Automatic current page detection - QR code appears instantly when you open the extension
• ⚡ Lightning-fast QR code generation
• 📱 Clean, user-friendly interface
• 💾 One-click download as PNG image
• 🎯 Works on any website
• 🔒 Privacy-focused - no data stored or transmitted

🎯 Perfect for:
• Sharing website links quickly
• Creating QR codes for presentations
• Mobile-friendly link sharing
• Digital business cards
• Event promotion

⚙️ How it works:
1. Click the extension icon
2. QR code for current page appears automatically
3. Edit text if needed or add custom content
4. Download your QR code instantly

Built with modern web technologies for optimal performance and security.

Privacy Policy: This extension only accesses the current tab's URL when you click the extension icon. No personal data is collected, stored, or transmitted to external servers.
```

### 3. 스크린샷 필요 (1280x800 권장)
1. **메인 팝업 화면** - QR 코드가 생성된 상태
2. **텍스트 입력 화면** - 사용자가 텍스트를 입력하는 모습
3. **다운로드 버튼 표시** - 완성된 QR 코드와 다운로드 옵션

### 4. 프로모션 이미지
- **Marquee**: 1400x560 (선택사항)
- **Small tile**: 440x280 (선택사항)

### 5. 개인정보 처리방침
현재 확장 프로그램은 activeTab 권한만 사용하므로 간단한 정책만 필요:
- 현재 탭의 URL만 접근
- 데이터 수집/저장/전송 없음
- 외부 서버 통신 없음

## 배포 체크리스트
- [x] manifest.json 스토어용 업데이트
- [ ] 최종 빌드 테스트
- [ ] 스크린샷 촬영
- [ ] ZIP 패키지 생성
- [ ] Chrome Developer Dashboard 업로드

## 참고사항
- 검토 기간: 1-3일
- 초기 등록비: $5 (일회성)
- 업데이트: 무료/무제한