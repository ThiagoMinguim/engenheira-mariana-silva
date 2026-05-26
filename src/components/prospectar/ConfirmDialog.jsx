import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

export default function ConfirmDialog({ open, title, message, confirmLabel = 'Confirmar', cancelLabel = 'Cancelar', danger = false, onConfirm, onCancel }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onCancel?.()
      if (e.key === 'Enter') onConfirm?.()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onCancel, onConfirm])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[60] bg-grafite/60 dark:bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onCancel}
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-white dark:bg-grafite rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className={`h-[3px] ${danger ? 'bg-red-500' : 'bg-dourado'}`} />
            <div className="p-6">
              <div className="flex items-start gap-3">
                {danger && (
                  <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                )}
                <div className="flex-1 pt-0.5">
                  <h3 className="font-heading font-semibold text-grafite dark:text-white text-base">{title}</h3>
                  {message && <p className="mt-1.5 text-sm text-grafite/65 dark:text-white/55 leading-relaxed">{message}</p>}
                </div>
              </div>
            </div>
            <div className="px-6 pb-6 flex items-center justify-end gap-2">
              <button
                onClick={onCancel}
                className="px-4 py-2 text-sm font-semibold rounded-lg text-grafite/70 dark:text-white/70 hover:bg-cinza dark:hover:bg-white/5 transition"
              >
                {cancelLabel}
              </button>
              <button
                autoFocus
                onClick={onConfirm}
                className={`px-5 py-2 text-sm font-semibold rounded-lg text-white shadow-sm transition ${
                  danger
                    ? 'bg-red-600 hover:bg-red-700 shadow-red-600/20'
                    : 'bg-verde hover:bg-verde-600 shadow-verde/20'
                }`}
              >
                {confirmLabel}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
