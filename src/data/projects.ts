export interface Project {
  id: number;
  title: string;
  period: string;
  year: string;
  description: string;
  techStack: string[];
  image?: string;
  github?: string;
  teamSize: number;
  contributions: string[];
  role: string[];
  achievements: string[];
  learnings: string[];
  color: string;
}

import medeasyImg from "../assets/images/medeasy.png";
import plogImg from "../assets/images/plog.png";
import SooBookImg from "../assets/images/SooBook.png";
import RummikubWithChatImg from "../assets/images/RummikubWithChat.png";
import LookUpTheSkyImg from "../assets/images/LookUpTheSky.png";
import DaymondImg from "../assets/images/Daymond.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "MedEasy (메디지)",
    period: "2025.01 ~ 2025.06",
    year: "2025",
    description: "디지털 소외 계층을 위한 복약 관리 도우미",
    techStack: ["React Native", "JavaScript", "REST API"],
    image: medeasyImg,
    github: "https://github.com/team-medeasy/medeasy-frontend",
    teamSize: 5,
    contributions: ["Frontend 30%"],
    role: [
      "약 검색 및 상세 정보 UI 구현",
      "AI 음성 챗봇 인터페이스 개발",
      "보호자 관리 화면 구현",
      "글자 크기 조절 기능",
      "REST API 연동",
    ],
    achievements: [
      "접근성을 고려한 복약 관리 앱 개발",
      "시나리오 기반 기능 구현",
      "한성대학교 캡스톤디자인 장려상",
      "K-PaaS 공모전 특별상",
    ],
    learnings: [
      "사용자 특성에 따른 UI/UX 차별화",
      "접근성의 중요성",
      "컴포넌트 구조의 영향력",
    ],
    color: "#A78BFA",
  },
  {
    id: 2,
    title: "PLog",
    period: "2025.07 ~ 2025.09",
    year: "2025",
    description: "부하 테스트 자동화 시스템",
    techStack: ["React", "TypeScript", "SSE"],
    image: plogImg,
    github: "https://github.com/team-Plog/plog-frontend",
    teamSize: 5,
    contributions: ["Frontend 50%"],
    role: [
      "부하 테스트 실행 UI 개발",
      "PDF 리포트 생성 기능",
      "컴포넌트 구조 설계",
      "반응형 레이아웃 및 라이트/다크 모드",
    ],
    achievements: [
      "API 성능 검증 UI 구현",
      "공통 컴포넌트 아키텍처 설계",
      "SSE 기반 실시간 대시보드",
    ],
    learnings: [
      "데이터 시각화의 중요성",
      "실시간 데이터 플로우 이해",
      "반응형 디자인의 의미",
    ],
    color: "#67E8F9",
  },
  {
    id: 3,
    title: "SooBook (수북)",
    period: "2024.09 ~ 2024.11",
    year: "2024",
    description: "독서 기록 도우미 애플리케이션",
    techStack: ["Flutter", "Dart", "Figma"],
    image: SooBookImg,
    github: "https://github.com/Advanced-MobileProgramming/flutter",
    teamSize: 4,
    contributions: ["Frontend 50%", "UI/UX 50%"],
    role: [
      "요구사항 분석",
      "Figma를 통한 전체 화면 UI/UX 디자인",
      "Flutter 위젯 구현",
    ],
    achievements: [
      "첫 프론트엔드 팀 프로젝트",
      "End-to-end 구현 경험",
      "화면 구조 설계 능력 향상",
    ],
    learnings: [
      "기획-디자인-구현 플로우",
      "Flutter 위젯 컴포넌트 재사용",
      "사용자 요구사항 기반 UI 디자인",
    ],
    color: "#F6C90E",
  },
  {
    id: 4,
    title: "Rummikub With Chat",
    period: "2024.10 ~ 2024.12",
    year: "2024",
    description: "Java 기반 실시간 루미큐브 게임",
    techStack: ["Java", "Socket", "GUI"],
    image: RummikubWithChatImg,
    github: "https://github.com/RummikubWithChat/RummikubWithChat",
    teamSize: 2,
    contributions: ["Server/Network 70%", "Frontend 40%"],
    role: [
      "오픈소스 게임 로직 분석 및 수정",
      "Java 소켓 기반 멀티플레이 구현",
      "GUI 디자인",
      "버그 수정",
    ],
    achievements: [
      "콘솔 게임을 실시간 멀티플레이로 확장",
      "로직 안정성 개선",
      "사운드 및 UI로 UX 향상",
    ],
    learnings: [
      "오픈소스 코드 분석 능력",
      "실시간 통신 이해",
      "로직 개선을 통한 자신감",
    ],
    color: "#FF6B9D",
  },
  {
    id: 5,
    title: "LookUpTheSky",
    period: "2024.05 ~ 2024.06",
    year: "2024",
    description: "날씨 정보 알림 앱",
    techStack: ["Java", "Android", "Korea Meteorological Administration API"],
    image: LookUpTheSkyImg,
    github: "https://github.com/hs-2171117-yeyoungyang/LookUpTheSky",
    teamSize: 1,
    contributions: ["UI/UX 100%", "Frontend 100%"],
    role: [
      "Android Studio 디자인 및 구현",
      "날씨 API 연동",
      "날씨 기반 UI 및 기능 구현",
    ],
    achievements: [
      "End-to-end 단독 구현",
      "온도 기반 비주얼 UI",
      "의류 추천 기능",
    ],
    learnings: [
      "외부 API 연동 플로우",
      "데이터 처리 및 시각화",
      "전체 앱 개발 경험",
    ],
    color: "#4ADE80",
  },
  {
    id: 6,
    title: "Daymond",
    period: "2025.05 ~ 2025.06",
    year: "2025",
    description: "자동 테마 추천 다이어리 앱",
    techStack: ["Swift", "Xcode", "Naver API"],
    image: DaymondImg,
    github: "https://github.com/hs-2171117-yeyoungyang/Daymond",
    teamSize: 1,
    contributions: ["UI/UX 100%", "Frontend 100%"],
    role: [
      "iOS 앱 기획 및 Xcode 구현",
      "Figma UI/UX 디자인",
      "사진 기반 테마 생성",
      "Naver API 뉴스 연동",
    ],
    achievements: [
      "사진 색상 기반 자동 테마 다이어리",
      "감성적 UI 및 기능 디자인",
      "API 활용 글쓰기 경험 확장",
    ],
    learnings: [
      "iOS 플랫폼 UI 개발 플로우",
      "사용자 감정이 경험에 미치는 영향",
      "기능을 넘어선 UX 디자인의 중요성",
    ],
    color: "#A78BFA",
  },
];
