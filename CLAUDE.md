# QR Code Chrome Extension

## 프로젝트 개요

Chrome 확장 프로그램으로 텍스트나 URL을 QR 코드로 변환하는 도구입니다.
추가로 CLI 도구도 제공합니다.

## 기술 스택

- **언어**: TypeScript
- **라이브러리**: qrcode (브라우저용)
- **플랫폼**: Chrome Extension Manifest V3
- **타입**: @types/chrome

## 프로젝트 구조

```
qrcode-extension/
├── src/
│   └── popup.ts              # 팝업 TypeScript 소스
├── public/                   # 정적 파일들
│   ├── manifest.json         # 확장 프로그램 메타데이터
│   ├── popup.html            # 팝업 UI
│   ├── qrcode.min.js         # QR 코드 라이브러리
│   └── icons/                # 확장 프로그램 아이콘들
├── scripts/
│   └── cli.ts                # CLI 도구 (Node.js용)
├── dist/                     # 빌드된 확장 프로그램
├── package.json
└── tsconfig.json
```

## 빌드 및 실행

### 개발 환경 설정
```bash
# 의존성 설치
npm install

# TypeScript 빌드 (확장 프로그램)
npm run build

# 개발 모드 (TypeScript 감시)
npm run dev
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

### CLI 도구
```bash
# CLI 실행
npm run cli "텍스트" [출력파일명.png]

# 예시
npm run cli "https://github.com" my-qrcode.png
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
- `npm run cli`: CLI 도구 실행
- `npm run build`: TypeScript 컴파일 및 확장 프로그램 빌드
- `npm run build:extension`: 확장 프로그램 빌드 (build와 동일)
- `npm run dev`: TypeScript 감시 모드

### 구조적 특징
- **확장 프로그램 우선**: 메인 프로젝트는 Chrome 확장 프로그램
- **TypeScript 기반**: 타입 안전성과 개발 경험 향상
- **분리된 관심사**: CLI 도구는 scripts 폴더로 분리
- **정적 파일 관리**: public 폴더에서 manifest, HTML, 아이콘 관리

## 향후 개선 사항

1. **빌드 시스템**: webpack 등 번들러 도입으로 더 효율적인 빌드
2. **테스트**: 단위 테스트 및 E2E 테스트 추가
3. **CI/CD**: GitHub Actions으로 자동 빌드/배포
4. **최적화**: 코드 스플리팅 및 번들 크기 최적화
5. **설정 관리**: 다양한 QR 코드 옵션 설정 UI

## 라이선스

MIT License