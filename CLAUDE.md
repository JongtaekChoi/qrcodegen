# QR Code Generator Project

## 프로젝트 개요

이 프로젝트는 두 가지 QR 코드 생성 도구를 제공합니다:

1. **CLI 도구**: 명령줄에서 텍스트를 QR 코드 이미지로 변환
2. **Chrome 확장 프로그램**: 브라우저에서 텍스트/URL을 QR 코드로 변환

## 기술 스택

- **언어**: TypeScript, JavaScript
- **라이브러리**: qrcode (Node.js QR 코드 생성)
- **플랫폼**: Node.js, Chrome Extension Manifest V3

## 프로젝트 구조

```
qrcode/
├── src/
│   └── index.ts              # CLI 도구 소스
├── dist/                     # Chrome 확장 프로그램 파일
│   ├── manifest.json         # 확장 프로그램 메타데이터
│   ├── popup.html            # 팝업 UI
│   ├── popup.js              # 팝업 로직
│   ├── qrcode.min.js         # QR 코드 라이브러리 (브라우저용)
│   └── icons/                # 확장 프로그램 아이콘들
├── package.json
└── tsconfig.json
```

## 빌드 및 실행

### CLI 도구
```bash
# 의존성 설치
npm install

# TypeScript 컴파일
npm run build

# CLI 실행
npm start "텍스트" [출력파일명.png]

# 예시
npm start "https://github.com" my-qrcode.png
```

### Chrome 확장 프로그램

#### 개발 모드 설치
```bash
# 확장 프로그램 빌드
npm run build:extension

# Chrome에서 설치:
# 1. chrome://extensions/ 이동
# 2. "개발자 모드" 활성화
# 3. "압축해제된 확장 프로그램을 로드합니다" 클릭
# 4. dist/ 폴더 선택
```

#### 배포용 패키징
```bash
# dist 폴더를 zip으로 압축
zip -r qrcode-extension.zip dist/

# Chrome Web Store에 업로드
```

## 기능

### CLI 도구
- 텍스트를 QR 코드 PNG 파일로 저장
- 명령줄 인수로 텍스트와 파일명 지정

### Chrome 확장 프로그램
- 팝업에서 텍스트/URL 입력
- 현재 탭 URL 자동 감지
- QR 코드 실시간 생성
- PNG 파일로 다운로드

## 개발 가이드

### 스크립트
- `npm start`: CLI 도구 실행
- `npm run build`: TypeScript 컴파일
- `npm run build:extension`: 확장 프로그램 빌드

### 주의사항
- Chrome 확장 프로그램은 Manifest V3 사용
- CLI와 확장 프로그램이 같은 프로젝트에 혼재
- .gitignore에서 확장 프로그램 파일들은 추적됨

## 향후 개선 사항

1. **구조 분리**: CLI와 확장 프로그램을 별도 폴더로 분리
2. **빌드 시스템**: webpack 등 번들러 도입
3. **TypeScript 일관성**: 확장 프로그램도 TypeScript로 변경
4. **테스트**: 단위 테스트 추가
5. **CI/CD**: GitHub Actions으로 자동 빌드/배포

## 라이선스

MIT License