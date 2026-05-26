import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Zap, Sparkles } from 'lucide-react'
import { CATEGORIES } from '../../lib/prospectar/categories'
import { createLead, normalizePhone } from '../../lib/prospectar/storage'
import { extractFromText } from '../../lib/prospectar/mapsExtractor'

export default function AddLeadModal({ initial, onClose, onSave }) {
  const [lead, setLead] = useState(() => initial ? { ...initial } : createLead())
  const [smartPaste, setSmartPaste] = useState('')
  const isEdit = !!initial

  const handleSmartPaste = () => {
    if (!smartPaste.trim()) return
    const extracted = extractFromText(smartPaste)
    setLead((prev) => ({
      ...prev,
      name: extracted.name || prev.name,
      phone: extracted.phone || prev.phone,
      address: extracted.address || prev.address,
      website: extracted.website || prev.website,
    }))
    setSmartPaste('')
  }

  const save = (e) => {
    e?.preventDefault()
    const final = {
      ...lead,
      name: lead.name.trim(),
      phone: normalizePhone(lead.phone),
      email: lead.email.trim(),
      address: lead.address.trim(),
    }
    if (!final.name) {
      alert('Coloca pelo menos o nome do lead.')
      return
    }
    onSave(final)
  }

  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-grafite/50 dark:bg-black/70 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          onClick={(e) => e.stopPropagation()}
          onSubmit={save}
          className="w-full max-w-2xl bg-white dark:bg-grafite rounded-2xl shadow-2xl my-8 overflow-hidden"
        >
          <div className="h-[3px] bg-dourado" />
          <div className="p-6 border-b border-cinza-dark/30 dark:border-white/10 flex items-center justify-between">
            <div>
              <h2 className="font-heading font-semibold text-lg text-grafite dark:text-white">
                {isEdit ? 'Editar Lead' : 'Novo Lead'}
              </h2>
              <p className="text-xs text-grafite/55 dark:text-white/45 mt-1">
                Preencha os dados ou use o smart-paste do Google Maps.
              </p>
            </div>
            <button type="button" onClick={onClose} className="text-grafite/60 dark:text-white/50 hover:text-red-600 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-cinza dark:hover:bg-white/5 transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
            {/* Smart paste */}
            {!isEdit && (
              <div className="bg-verde/5 dark:bg-verde/10 border border-verde/20 dark:border-verde/30 rounded-xl p-4">
                <p className="text-xs font-semibold text-verde dark:text-verde-300 uppercase tracking-wider mb-2 inline-flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> Smart-Paste do Google Maps
                </p>
                <p className="text-xs text-grafite/65 dark:text-white/55 mb-2">
                  No Google Maps, selecione tudo (Ctrl+A) na coluna lateral da empresa e cole aqui — eu extraio nome, telefone, endereço e site automaticamente.
                </p>
                <textarea
                  value={smartPaste}
                  onChange={(e) => setSmartPaste(e.target.value)}
                  placeholder="Cole o texto do Google Maps aqui…"
                  rows={3}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-cinza-dark dark:border-white/15 bg-white dark:bg-grafite-dark text-grafite dark:text-white focus:outline-none focus:border-verde resize-y"
                />
                <button type="button" onClick={handleSmartPaste} disabled={!smartPaste.trim()} className="mt-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-verde text-white hover:bg-verde-600 disabled:opacity-40 disabled:cursor-not-allowed transition inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Extrair dados
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Nome / Empresa *">
                <input
                  value={lead.name}
                  onChange={(e) => setLead({ ...lead, name: e.target.value })}
                  className="input"
                  placeholder="ex: Imobiliária Aliança"
                  autoFocus
                />
              </Field>

              <Field label="Categoria">
                <select
                  value={lead.category}
                  onChange={(e) => setLead({ ...lead, category: e.target.value })}
                  className="input"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>{c.label}</option>
                  ))}
                </select>
              </Field>

              <Field label="WhatsApp / Telefone">
                <input
                  value={lead.phone}
                  onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                  className="input"
                  placeholder="(34) 99999-9999"
                />
              </Field>

              <Field label="Email">
                <input
                  type="email"
                  value={lead.email}
                  onChange={(e) => setLead({ ...lead, email: e.target.value })}
                  className="input"
                  placeholder="contato@empresa.com.br"
                />
              </Field>

              <Field label="Instagram">
                <input
                  value={lead.instagram}
                  onChange={(e) => setLead({ ...lead, instagram: e.target.value })}
                  className="input"
                  placeholder="@empresa"
                />
              </Field>

              <Field label="Site">
                <input
                  value={lead.website}
                  onChange={(e) => setLead({ ...lead, website: e.target.value })}
                  className="input"
                  placeholder="https://…"
                />
              </Field>

              <Field label="Endereço" full>
                <input
                  value={lead.address}
                  onChange={(e) => setLead({ ...lead, address: e.target.value })}
                  className="input"
                  placeholder="Rua, número — Bairro"
                />
              </Field>

              <Field label="Cidade">
                <input
                  value={lead.city}
                  onChange={(e) => setLead({ ...lead, city: e.target.value })}
                  className="input"
                />
              </Field>

              <Field label="Origem">
                <select
                  value={lead.source}
                  onChange={(e) => setLead({ ...lead, source: e.target.value })}
                  className="input"
                >
                  <option value="google_maps">Google Maps</option>
                  <option value="instagram">Instagram</option>
                  <option value="indicacao">Indicação</option>
                  <option value="evento">Evento / Networking</option>
                  <option value="other">Outro</option>
                </select>
              </Field>

              <Field label="Notas" full>
                <textarea
                  value={lead.notes}
                  onChange={(e) => setLead({ ...lead, notes: e.target.value })}
                  rows={3}
                  className="input resize-y"
                  placeholder="Contexto, melhor horário, observações…"
                />
              </Field>
            </div>
          </div>

          <div className="p-6 border-t border-cinza-dark/30 dark:border-white/10 flex items-center justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-semibold rounded-lg text-grafite/70 dark:text-white/70 hover:bg-cinza dark:hover:bg-white/5 transition">
              Cancelar
            </button>
            <button type="submit" className="shimmer-btn px-5 py-2 text-sm font-semibold rounded-lg bg-verde text-white hover:bg-verde-600 transition shadow-sm shadow-verde/20">
              {isEdit ? 'Salvar' : 'Adicionar Lead'}
            </button>
          </div>
        </motion.form>
      </motion.div>
      <style>{`
        .input { width: 100%; padding: 0.625rem 0.875rem; border-radius: 0.5rem; border: 1px solid rgb(224 228 222); background: white; color: rgb(46 50 56); font-size: 0.875rem; outline: none; transition: border-color 0.2s; }
        .input:focus { border-color: rgb(47 111 78); }
        .dark .input { background: rgb(34 38 43); border-color: rgba(255,255,255,0.15); color: white; }
      `}</style>
    </AnimatePresence>
  )
}

function Field({ label, full, children }) {
  return (
    <label className={`block ${full ? 'md:col-span-2' : ''}`}>
      <span className="text-xs font-semibold text-grafite/65 dark:text-white/55 uppercase tracking-wider">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  )
}
