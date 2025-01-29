import * as React from 'react';
import useClipboardCopy from './useClipboardCopy';

export interface CodeCopyButtonProps {
  code: string;
}

export function CodeCopyButton(props: CodeCopyButtonProps) {
  const { code, ...other } = props;
  const { copy, isCopied } = useClipboardCopy();

  const macOS = window.navigator.platform.toUpperCase().includes('MAC');
  const key = macOS ? '⌘' : 'Ctrl + ';

  return (
    <div className="YushiiCode-copy-container">
      <button
        {...other}
        aria-label="Copiar el codigo"
        type="button"
        className="YushiiCode-copy"
        onClick={async () => {
          // event.stopPropagation();
          await copy(code);
        }}
      >
        {/* yushii-ui/no-harcoded-labels */}
        {isCopied ? 'Copiado' : 'Copiar'}
        <span className="YushiiCode-copyKeypress" style={{ opacity: isCopied ? 0 : 1 }}>
          <span>(or</span> {key}C<span>)</span>
        </span>
      </button>
    </div>
  );
}
