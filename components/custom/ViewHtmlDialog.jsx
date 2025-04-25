import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
const ViewHtmlDialog = ({openDialog, htmlCode, closeDialog}) => {
  return (
    
        <Dialog open={openDialog} onOpenChange={closeDialog}>
  
  <DialogContent className="w-screen h-screen max-w-none max-h-none p-6 flex flex-col">
    <DialogHeader>
      <DialogTitle asChild>
        <div><h2>HTML Web Template</h2></div></DialogTitle>
      <DialogDescription asChild>
      
  {/* Rendered Output */}
  <div
  className="flex-1 overflow-auto mt-4 bg-white rounded p-4 shadow"
  dangerouslySetInnerHTML={{ __html: htmlCode }}
/>

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

   
  )
}

export default ViewHtmlDialog


{/* Raw HTML Code 
  <div className="max-h-[400px] overflow-auto bg-gray-200 p-4">
    <pre className="whitespace-pre-wrap break-all">
      <code>{htmlCode}</code>
    </pre>
  </div>

       */}