import { useEffect } from 'react'

// Site fixado no modo escuro (decisão da Marília — no claro não dava pra ler bem).
export function useTheme() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  return [true, () => {}]
}
