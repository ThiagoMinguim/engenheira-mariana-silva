import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2, CheckSquare, X, ChevronUp } from 'lucide-react'
import { STATUSES } from '../../lib/prospectar/storage'
import { StatusIcon } from '../../lib/prospectar/icons'

export default function BulkActionsBar({ count, totalVisible, onDelete, onChangeStatus, onSelectAllVisible, onClear }) {
  const [statusOpen, setStatusOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      if (statusOpen && wrapRef.current && !wrapRef.current.contains(e.target)) setStatusOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [statusOpen])

  useEffect(() => {
    if (count === 0) setStatusOpen(false)
  }, [count])

  const allVisibleSelected = totalVisible > 0 && count >= totalVisible

  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[calc(100vw-2rem)]"
        >
          <div className="bg-grafite dark:bg-white text-white dark:text-grafite rounded-2xl shadow-2xl shadow-grafite/30 dark:shadow-black/40 border border-white/10 dark:border-grafite/10 flex items-center gap-1 p-1.5 backdrop-blur">
            <div className="px-3 py-1.5 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-verde flex items-center justify-center flex-shrink-0">
                <CheckSquare className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm leading-none">{count} selecionado{count > 1 ? 's' : ''}</p>
                <p className="text-[10px] opacity-60 leading-none mt-0.5">de {totalVisible} visíveis</p>
              </div>
            </div>

            <div className="h-8 w-px bg-white/15 dark:bg-grafite/15 mx-1" />

            <button
              onClick={onSelectAllVisible}
              disabled={allVisibleSelected}
              className="px-3 py-2 text-xs font-medium rounded-lg hover:bg-white/10 dark:hover:bg-grafite/10 disabled:opacity-40 disabled:cursor-not-allowed transition"
              title="Selecionar todos os leads visíveis (com filtro atual)"
            >
              {allVisibleSelected ? 'Tudo' : 'Todos visíveis'}
            </button>

            <div ref={wrapRef} className="relative">
              <button
                onClick={() => setStatusOpen((v) => !v)}
                className="px-3 py-2 text-xs font-medium rounded-lg hover:bg-white/10 dark:hover:bg-grafite/10 transition inline-flex items-center gap-1.5"
              >
                Mudar status
                <ChevronUp className={`w-3.5 h-3.5 transition-transform ${statusOpen ? '' : 'rotate-180'}`} />
              </button>
              <AnimatePresence>
                {statusOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 bottom-full mb-2 w-56 bg-white dark:bg-grafite border border-cinza-dark dark:border-white/10 rounded-lg shadow-xl py-1 text-grafite dark:text-white overflow-hidden"
                  >
                    {STATUSES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => { onChangeStatus(s.id); setStatusOpen(false) }}
                        className="w-full text-left px-3 py-2 text-xs hover:bg-cinza dark:hover:bg-white/5 transition inline-flex items-center gap-2"
                      >
                        <StatusIcon id={s.id} className="w-3.5 h-3.5" />
                        {s.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={onDelete}
              className="px-3 py-2 text-xs font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 transition inline-flex items-center gap-1.5 shadow-sm shadow-red-900/30"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Apagar
            </button>

            <div className="h-8 w-px bg-white/15 dark:bg-grafite/15 mx-0.5" />

            <button
              onClick={onClear}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/10 dark:hover:bg-grafite/10 transition"
              title="Limpar seleção"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
