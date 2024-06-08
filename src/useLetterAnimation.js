import { useEffect } from 'react';

const useLetterAnimation = (textRef) => {
  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const letters = textElement.textContent.split('');
    textElement.textContent = '';

    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.animationDelay = `${index * 0.1}s`;
      span.classList.add('inline-block', 'animate-letter-by-letter');
      textElement.appendChild(span);
    });
  }, [textRef]);
};

export default useLetterAnimation;
