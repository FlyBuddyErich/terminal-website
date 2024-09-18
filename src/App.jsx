import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Ascii from './Components/Ascii/Ascii';

function App() {
  const userInputRef = useRef(null);
  const outputRef = useRef(null);
  const terminalBodyRef = useRef(null);
  const [outputContent, setOutputContent] = useState([]);
  const [typingEffect, setTypingEffect] = useState({ text: '', index: 0 });
  const [stopwatch, setStopwatch] = useState({ isRunning: false, startTime: null, elapsedTime: 0 });
  const stopwatchInterval = useRef(null);
  const [clearAnimation, setClearAnimation] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    focusUserInput();

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      if (stopwatchInterval.current) {
        clearInterval(stopwatchInterval.current);
      }
    };
  }, []);

  function focusUserInput() {
    userInputRef.current?.focus();
  }

  function handleDocumentClick(event) {
    if (!userInputRef.current?.contains(event.target)) {
      focusUserInput();
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const command = userInputRef.current.value.trim();
      if (command) {
        setOutputContent(prev => [...prev, { type: 'command', content: command }]);
      }
      const response = processCommand(command);
      userInputRef.current.value = '';
      focusUserInput();
      if (response !== null) {
        setOutputContent(prev => [...prev, { type: 'response', content: response }]);
      } else {
        setOutputContent(prev => [...prev, { type: 'response', content: '' }]);
      }
    }
  }

  function processCommand(command) {
    const cmd = command.toLowerCase();
    let response = '';

    switch (cmd) {
      case 'creator':
        response = 'Hey! My name is Maxim, and I am a frontend developer. I made this terminal "SIGNAL" just for fun in 4 hours, enjoy.';
        break;
      case 'about':
        response = 'This is a Terminal "SIGNAL" which functions like a terminal with its own commands. Write other commands to see what happens.';
        break;
      case 'help':
        response = 'Types of commands:\nabout\ncalc\ncontact\ncreator\nclear\necho\nproblem\nwatch start/watch end';
        break;
      case 'contact':
        response = 'You can reach me via email at "kokorewmaxim@inbox.ru" or my telegramm account @hopelesshex.';
        break;
      case 'problem':
        response = 'If you had found a bug or problem try to clear or press F5 to refresh the page. If that doesnt help to resolve the issue, please write about it in my telegramm account @hopelesshex.';
        break;
      case 'clear':
        setClearAnimation(true);
        setTimeout(() => {
          setOutputContent([]);
          setClearAnimation(false);
        }, 1000); // Delay after animation
        return '';
      case 'signal':
        setIsGlitching(true);
        setTimeout(() => {
          setIsGlitching(false);
        }, 3000);
        response = 'Signal Error...';
        break;
      case '':
        return '';
      default:
        if (cmd.startsWith('echo ')) {
          response = cmd.substring(5);
        } else if (cmd.startsWith('calc ')) {
          try {
            const expression = cmd.substring(5);
            // eslint-disable-next-line no-eval
            const result = eval(expression);
            response = `Result: ${result}`;
          } catch (error) {
            response = 'Error: Incorrect math expression';
          }
        } else if (cmd === 'watch start') {
          if (!stopwatch.isRunning) {
            setStopwatch({ isRunning: true, startTime: Date.now(), elapsedTime: 0 });
            stopwatchInterval.current = setInterval(() => {
              setStopwatch(prev => ({
                ...prev,
                elapsedTime: Date.now() - prev.startTime
              }));
            }, 10);
            response = 'Stopwatch started';
          } else {
            response = 'Stopwatch already running';
          }
        } else if (cmd === 'watch end') {
          if (stopwatch.isRunning) {
            clearInterval(stopwatchInterval.current);
            setStopwatch(prev => ({ ...prev, isRunning: false }));
            response = `Stopwatch stopped. Time elapsed: ${formatTime(stopwatch.elapsedTime)}`;
          } else {
            response = 'Stopwatch was not started';
          }
        } else {
          response = `Command not found: ${command}`;
        }
    }

    setTypingEffect({ text: response, index: 0 });
    return null;
  }

  function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = ms % 1000;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
  }

  useEffect(() => {
    if (typingEffect.index < typingEffect.text.length) {
      const timer = setTimeout(() => {
        setTypingEffect(prev => ({
          ...prev,
          index: prev.index + 1
        }));
        setOutputContent(prev => {
          const newContent = [...prev];
          newContent[newContent.length - 1] = { 
            type: 'response', 
            content: typingEffect.text.slice(0, typingEffect.index + 1) 
          };
          return newContent;
        });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [typingEffect]);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [outputContent]);

  return (
    <>
      <div className={`terminal-window ${isGlitching ? 'glitch' : ''}`}>
        <div className="scanline"></div>
        <div className="crt-overlay"></div>
        <div className="terminal-header">
          <div className="button red"></div>
          <div className="button yellow"></div>
          <div className="button green"></div>
        </div>
        <div className="ascii-art">
          <Ascii />
        </div>
        <div className={`terminal-body ${clearAnimation ? 'clear-animation' : ''} ${isGlitching ? 'glitch-text' : ''}`} ref={terminalBodyRef}>
          <p>Write <span>help</span> to see all commands</p>
          {stopwatch.isRunning && (
            <div className="stopwatch">
              Stopwatch: {formatTime(stopwatch.elapsedTime)}
            </div>
          )}
          <div className="output" ref={outputRef}>
            {outputContent.map((item, index) => (
              <div key={index} className={item.type === 'command' ? 'command-line' : 'response-line'}>
                {item.type === 'command' ? `user@signal.terminal:~$ ${item.content}` : item.content}
              </div>
            ))}
          </div>
          <div className="command-line">
            <span> user@signal.terminal:~$ </span>
            <input
              type="text"
              id="userInput"
              autoComplete="off"
              ref={userInputRef}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
