import { useAsciiText, rectangles, alligator } from 'react-ascii-text';

function Ascii() {
  const asciiTextRef = useAsciiText({
    animationCharacters: "▒░█",
    animationCharacterSpacing: 1,
    animationDelay: 2000,
    animationDirection: "down",
    animationInterval: 100,
    animationLoop: true,
    animationSpeed: 30,
    font: alligator,
    text: ["TERMINAL", "SIGNAL"],
  });

  return <pre ref={asciiTextRef}></pre>;
}

export default Ascii;

