export type AppKey = 'walkten' | 'piaco' | 'guico' | 'dateyomi' | 'katayomi'
export type Tint = 'red' | 'blue' | 'yellow'

export interface AppItem {
  key: AppKey
  name: string
  route: string
  tag: string
  tint: Tint
  /** 홈 카드/스티커용 짧은 소개 */
  blurb: string
  /** 홈 스티커 클러스터에 노출할지 */
  sticker?: boolean
  status: 'released' | 'in-progress'
}

export const apps: AppItem[] = [
  {
    key: 'walkten',
    name: '밥먹고십분걷기',
    route: '/walkten',
    tag: '건강',
    tint: 'red',
    blurb: '식후 십분 걷기 습관을 만드는 앱',
    sticker: true,
    status: 'released',
  },
  {
    key: 'piaco',
    name: 'Piaco',
    route: '/piaco',
    tag: '음악',
    tint: 'blue',
    blurb: '피아노 코드 퀴즈, 연주 소리로 채점',
    sticker: true,
    status: 'released',
  },
  {
    key: 'guico',
    name: 'Guico',
    route: '/guico',
    tag: '음악',
    tint: 'yellow',
    blurb: '기타 코드 퀴즈, 연주 소리로 채점',
    sticker: true,
    status: 'released',
  },
  {
    key: 'dateyomi',
    name: 'DateYomi',
    route: '/dateyomi',
    tag: '언어',
    tint: 'blue',
    blurb: '일본어 날짜 읽기를 매일 알림·위젯으로',
    status: 'released',
  },
  {
    key: 'katayomi',
    name: 'Katayomi',
    route: '/katayomi',
    tag: '언어',
    tint: 'red',
    blurb: '가타카나 읽기를 매일 노출과 속도 훈련 퀴즈로',
    status: 'released',
  },
]
