'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import ConfettiEffect from './ConfettiEffect';

type Choice = 'rock' | 'paper' | 'scissors' | null;
type Result = 'win' | 'lose' | 'draw' | null;

// Game icon mapping
const CHOICE_ICONS = {
  rock: '✊',
  paper: '✋',
  scissors: '✌️'
};

export default function Game() {
  // Game state
  const [playerChoice, setPlayerChoice] = useState<Choice>(null);
  const [computerChoice, setComputerChoice] = useState<Choice>(null);
  const [result, setResult] = useState<Result>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scores, setScores] = useState({
    wins: 0,
    losses: 0,
    draws: 0,
  });
  const [showAnimation, setShowAnimation] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showRules, setShowRules] = useState(false);
  
  // Reset the game state for a new round
  const resetRound = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setIsPlaying(false);
    setShowAnimation(false);
    setShowConfetti(false);
  };
  
  // Start a new game
  const startGame = () => {
    resetRound();
    setScores({ wins: 0, losses: 0, draws: 0 });
  };
  
  // Generate computer choice
  const generateComputerChoice = (): Choice => {
    const choices: Choice[] = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };
  
  // Determine the winner based on player and computer choices
  const determineWinner = (player: Choice, computer: Choice): Result => {
    if (player === computer) return 'draw';
    
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'win';
    }
    
    return 'lose';
  };
  
  // Handle player choice
  const handleChoice = (choice: Choice) => {
    if (isPlaying) return;
    
    setIsPlaying(true);
    setPlayerChoice(choice);
    setShowAnimation(true);
    
    // Simulate computer thinking
    setTimeout(() => {
      const computerSelection = generateComputerChoice();
      setComputerChoice(computerSelection);
      
      if (choice) {
        const gameResult = determineWinner(choice, computerSelection);
        setResult(gameResult);
        
        // Show confetti on win
        if (gameResult === 'win') {
          setShowConfetti(true);
        }
        
        // Update scores
        setScores(prevScores => {
          if (gameResult === 'win') {
            return { ...prevScores, wins: prevScores.wins + 1 };
          } else if (gameResult === 'lose') {
            return { ...prevScores, losses: prevScores.losses + 1 };
          } else {
            return { ...prevScores, draws: prevScores.draws + 1 };
          }
        });
      }
    }, 1000);
  };
  
  // Get result message
  const getResultMessage = (): string => {
    if (!result) return '';
    
    switch (result) {
      case 'win':
        return 'You Win! Awesome!';
      case 'lose':
        return 'You Lose! Try again!';
      case 'draw':
        return 'It\'s a Draw! Play again!';
      default:
        return '';
    }
  };
  
  // Get choice display name
  const getChoiceName = (choice: Choice): string => {
    if (!choice) return '';
    
    const names = {
      rock: 'Rock',
      paper: 'Paper',
      scissors: 'Scissors'
    };
    
    return names[choice] || '';
  };

  // Get choice icon
  const getChoiceIcon = (choice: Choice): string => {
    if (!choice) return '';
    return CHOICE_ICONS[choice] || '';
  };
  
  // Toggle rules display
  const toggleRules = () => {
    setShowRules(!showRules);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 py-8 px-4">
      <ConfettiEffect active={showConfetti} />
      
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        {/* Title area */}
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 py-6 px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-md">Rock Paper Scissors</h1>
          <p className="text-lg opacity-90">Play the classic game!</p>
          
          <div className="absolute top-5 right-5">
            <button 
              onClick={toggleRules}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200"
              aria-label="Game rules"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Game rules explanation */}
        {showRules && (
          <div className="p-6 bg-blue-50 dark:bg-gray-700 border-b border-blue-100 dark:border-gray-600">
            <h2 className="text-2xl font-bold mb-3 text-blue-700 dark:text-blue-300">Game Rules</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-200">
              <p>Rock Paper Scissors is an ancient hand gesture game typically played between two people to determine a winner or make a choice.</p>
              <p className="font-medium">Basic Rules:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Rock (✊) beats Scissors</li>
                <li>Scissors (✌️) beats Paper</li>
                <li>Paper (✋) beats Rock</li>
              </ul>
              <p>Choose your gesture, and the computer will randomly select one. The winner is determined by the rules above.</p>
            </div>
            <button 
              onClick={toggleRules}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200"
            >
              Start Playing
            </button>
          </div>
        )}
      
        {/* Scoreboard */}
        <div className="flex justify-between p-6 bg-white dark:bg-gray-800">
          <div className="w-full">
            <h2 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-200 text-center">Scoreboard</h2>
            <div className="flex justify-around gap-4">
              <div className="text-center bg-green-100 dark:bg-green-900 rounded-lg p-3 flex-1">
                <p className="text-lg font-medium text-green-700 dark:text-green-300">Wins</p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">{scores.wins}</p>
              </div>
              <div className="text-center bg-yellow-100 dark:bg-yellow-900 rounded-lg p-3 flex-1">
                <p className="text-lg font-medium text-yellow-700 dark:text-yellow-300">Draws</p>
                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{scores.draws}</p>
              </div>
              <div className="text-center bg-red-100 dark:bg-red-900 rounded-lg p-3 flex-1">
                <p className="text-lg font-medium text-red-700 dark:text-red-300">Losses</p>
                <p className="text-3xl font-bold text-red-600 dark:text-red-400">{scores.losses}</p>
              </div>
            </div>
          </div>
        </div>
      
        {/* Game area */}
        <div className="p-6 bg-white dark:bg-gray-800">
          <div className="flex flex-col md:flex-row justify-around items-center mb-8 gap-8">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">You</h2>
              <div className={`w-36 h-36 flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-500 dark:from-blue-600 dark:to-blue-700 rounded-full shadow-lg
                ${showAnimation && playerChoice ? 'animate-choice' : ''}`}>
                {playerChoice ? (
                  <span className="text-7xl">{getChoiceIcon(playerChoice)}</span>
                ) : (
                  <span className="text-7xl text-white opacity-50">?</span>
                )}
              </div>
              <p className="mt-3 text-lg font-medium text-gray-700 dark:text-gray-300">{getChoiceName(playerChoice)}</p>
            </div>
            
            {/* VS icon */}
            <div className="hidden md:block">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full">
                <span className="text-xl font-bold text-gray-600 dark:text-gray-300">VS</span>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">Computer</h2>
              <div className={`w-36 h-36 flex items-center justify-center bg-gradient-to-r from-red-400 to-red-500 dark:from-red-600 dark:to-red-700 rounded-full shadow-lg
                ${showAnimation && computerChoice ? 'animate-choice-computer' : ''}`}>
                {computerChoice ? (
                  <span className="text-7xl">{getChoiceIcon(computerChoice)}</span>
                ) : (
                  <span className="text-7xl text-white opacity-50">?</span>
                )}
              </div>
              <p className="mt-3 text-lg font-medium text-gray-700 dark:text-gray-300">{getChoiceName(computerChoice)}</p>
            </div>
          </div>
          
          {/* Result display */}
          {result && (
            <div className={`text-center mb-8 text-3xl font-bold animate-result ${
              result === 'win' ? 'text-green-600 dark:text-green-400' :
              result === 'lose' ? 'text-red-600 dark:text-red-400' : 'text-yellow-600 dark:text-yellow-400'
            }`}>
              {getResultMessage()}
            </div>
          )}
          
          {/* Control buttons */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Make Your Choice</h3>
            <div className="flex justify-center gap-6 mb-8 flex-wrap">
              <button
                onClick={() => handleChoice('rock')}
                disabled={isPlaying}
                className="w-24 h-24 bg-gradient-to-r from-amber-400 to-amber-500 dark:from-amber-600 dark:to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110 transition-transform duration-200"
                aria-label="Choose rock"
              >
                <span className="text-5xl mt-1">✊</span>
              </button>
              <button
                onClick={() => handleChoice('paper')}
                disabled={isPlaying}
                className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-emerald-500 dark:from-emerald-600 dark:to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110 transition-transform duration-200"
                aria-label="Choose paper"
              >
                <span className="text-5xl mt-1">✋</span>
              </button>
              <button
                onClick={() => handleChoice('scissors')}
                disabled={isPlaying}
                className="w-24 h-24 bg-gradient-to-r from-indigo-400 to-indigo-500 dark:from-indigo-600 dark:to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110 transition-transform duration-200"
                aria-label="Choose scissors"
              >
                <span className="text-5xl mt-1">✌️</span>
              </button>
            </div>
            
            <button
              onClick={isPlaying ? resetRound : startGame}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              {isPlaying ? "Play Again" : "New Game"}
            </button>
          </div>
        </div>
        
        {/* Game introduction */}
        <div className="p-6 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">About Rock Paper Scissors</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Rock Paper Scissors is a popular hand game played around the world. Its origins can be traced back to ancient China, 
              where it was known as "shoushiling." It later spread to Japan and then became popular worldwide. The game is simple 
              to learn but involves strategy and psychological gameplay.
            </p>
            <p>
              In modern times, Rock Paper Scissors is not just a children's game. It's used in various contexts, 
              from settling minor disputes to major competitions and even in game theory research.
            </p>
            <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Did You Know?</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>There are professional Rock Paper Scissors tournaments around the world</li>
                <li>Studies show that men tend to throw "Rock" more often in the first round</li>
                <li>The optimal strategy is to choose completely randomly, but humans struggle to be truly random</li>
              </ul>
            </div>
          </div>
        </div>      
      </div>
    </div>
  );
} 