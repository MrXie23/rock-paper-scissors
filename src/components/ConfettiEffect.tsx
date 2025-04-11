'use client';

import { useEffect, useState } from 'react';

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  speed: number;
  opacity: number;
};

interface ConfettiEffectProps {
  active: boolean;
}

export default function ConfettiEffect({ active }: ConfettiEffectProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const colors = ['#FFC700', '#FF0058', '#2196F3', '#76FF03', '#E040FB'];
  
  // Create confetti particles when active
  useEffect(() => {
    if (active) {
      const particlesArray: Particle[] = [];
      
      // Create 30 particles (reduced particle count)
      for (let i = 0; i < 30; i++) {
        particlesArray.push({
          id: i,
          x: Math.random() * 100,
          y: 0,
          size: Math.random() * 6 + 4, // smaller size range
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          speed: Math.random() * 1.5 + 0.5, // lower speed
          opacity: 1,
        });
      }
      
      setParticles(particlesArray);
      
      // Clear particles after 2 seconds
      const timer = setTimeout(() => {
        setParticles([]);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [active]);
  
  // Reduce update frequency
  useEffect(() => {
    if (particles.length === 0) return;
    
    const interval = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          y: particle.y + particle.speed,
          x: particle.x + (Math.sin(particle.y * 0.03) * 0.5), // reduced side-to-side movement
          rotation: particle.rotation + 0.5, // slower rotation
          opacity: particle.y > 70 ? 1 - ((particle.y - 70) / 30) : 1,
        })).filter(particle => particle.opacity > 0 && particle.y < 100) // additional filter condition
      );
    }, 100); // reduced update frequency
    
    return () => clearInterval(interval);
  }, [particles.length]);
  
  if (!active || particles.length === 0) return null;
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            transform: `rotate(${particle.rotation}deg)`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
} 