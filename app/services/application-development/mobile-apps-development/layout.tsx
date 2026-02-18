import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mobile App Development - iOS & Android | Trenzit Solutions',
  description:
    'Expert mobile app development for iOS, Android, and cross-platform solutions. We build high-performance native and hybrid mobile applications using React Native, Flutter, and platform-specific technologies.',
  keywords:
    'mobile app development, iOS app development, Android app development, React Native, Flutter development, cross-platform mobile apps, native mobile development, mobile UI/UX design',
}

export default function MobileAppsDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
