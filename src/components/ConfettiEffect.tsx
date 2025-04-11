'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

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
  // 使用useRef存储colors数组，避免它成为依赖项
  const colorsRef = useRef(['#FFC700', '#FF0058', '#2196F3', '#76FF03', '#E040FB']);
  
  // Create confetti particles when active
  useEffect(() => {
    if (active) {
      const particlesArray: Particle[] = [];
      const colors = colorsRef.current;
      
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
    } else {
      // 当active变为false时，清空粒子
      setParticles([]);
    }
  }, [active]); // 只依赖active
  
  // 使用useRef跟踪动画帧，而不是依赖useState
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  
  // 设置动画效果
  useEffect(() => {
    // 如果没有粒子或组件不活跃，清除任何现有的动画
    if (particles.length === 0 || !active) {
      if (animationRef.current) {
        clearInterval(animationRef.current);
        animationRef.current = null;
      }
      return;
    }
    
    // 设置新的动画间隔
    animationRef.current = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          y: particle.y + particle.speed,
          x: particle.x + (Math.sin(particle.y * 0.03) * 0.5),
          rotation: particle.rotation + 0.5,
          opacity: particle.y > 70 ? 1 - ((particle.y - 70) / 30) : 1,
        })).filter(particle => particle.opacity > 0 && particle.y < 100)
      );
    }, 100);
    
    // 清理函数
    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [particles.length, active]); // 只依赖particles.length和active
  
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