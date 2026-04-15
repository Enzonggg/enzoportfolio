import { useRef } from 'react';

interface ProfileCardProps {
  avatarUrl?: string;
}

const ProfileCard = ({
  avatarUrl = '/avatar.jpg',
}: ProfileCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    el.style.transform = `rotateY(${x * 12}deg) rotateX(${y * -12}deg) scale(1.02)`;
  };

  const resetTilt = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
  };

  return (
    <div className="relative" style={{ perspective: '900px' }}>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-indigo-500 opacity-40 blur-2xl" />

      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        className="relative overflow-hidden rounded-3xl transition-all duration-300"
        style={{
          width: '300px',
          height: '420px',
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 10px 40px rgba(139,92,246,0.25), 0 0 20px rgba(99,102,241,0.15)',
        }}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-purple-500/10 to-indigo-500/10" />

        <img
          src={avatarUrl}
          alt="profile"
          className="h-full w-full object-cover"
          style={{ filter: 'brightness(1.05) contrast(1.05)' }}
        />

      </div>
    </div>
  );
};

export default ProfileCard;
