const copyButton = document.querySelector("[data-copy-install]");

if (copyButton) {
  const defaultLabel = copyButton.textContent.trim();
  const command = copyButton.getAttribute("data-copy-text") ?? "";
  let resetTimerId;

  const setLabel = (label) => {
    copyButton.textContent = label;
    copyButton.setAttribute("aria-label", label);
  };

  const resetLabel = () => {
    window.clearTimeout(resetTimerId);
    resetTimerId = window.setTimeout(() => {
      setLabel(defaultLabel);
    }, 1500);
  };

  const fallbackCopy = () => {
    const textarea = document.createElement("textarea");
    textarea.value = command;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();

    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  };

  copyButton.addEventListener("click", () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(command).then(
        () => {
          setLabel("copied");
          resetLabel();
        },
        () => {
          if (fallbackCopy()) {
            setLabel("copied");
          } else {
            setLabel("copy failed");
          }
          resetLabel();
        }
      );
      return;
    }

    if (fallbackCopy()) {
      setLabel("copied");
    } else {
      setLabel("copy failed");
    }
    resetLabel();
  });
}
