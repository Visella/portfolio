"use client"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function FullscreenImage({
  src,
  alt,
  open,
  onOpenChange,
}: {
  src: string
  alt: string
  open: boolean
  onOpenChange: (v: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-[95vw] max-w-[95vw] h-[95vh] max-h-[95vh] p-0 bg-black/90 border border-white/10"
        aria-label={alt}
      >
        <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-contain rounded-lg" />
      </DialogContent>
    </Dialog>
  )
}
