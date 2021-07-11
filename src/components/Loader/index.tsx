import * as styles from './styles.css'

type LoaderOverlayProps = {
  isLoading: Boolean
  children: React.ReactNode
  text: string
}

export function Loader() {
  return <>Loading...</>
}

export function LoaderOverlay({
  isLoading = false,
  text = 'LOADING',
  children,
}: LoaderOverlayProps) {
  return (
    <div className={styles.overlay}>
      {isLoading && <div className={styles.loading}>{text}</div>}
      {children}
    </div>
  )
}
