/**
 * 向Google Analytics发送事件
 * @param action 事件动作
 * @param category 事件类别
 * @param label 事件标签
 * @param value 事件值
 */
export const sendGAEvent = (
  action: string,
  {
    category,
    label,
    value
  }: {
    category?: string;
    label?: string;
    value?: number;
  } = {}
) => {
  if (typeof window === 'undefined' || typeof (window as any).gtag !== 'function') {
    return;
  }

  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

/**
 * 游戏相关事件发送
 */
export const gameEvents = {
  /**
   * 游戏开始
   */
  gameStart: () => {
    sendGAEvent('game_start', { category: 'Game' });
  },

  /**
   * 用户选择
   * @param choice 用户选择（石头、剪刀、布）
   */
  playerChoice: (choice: string) => {
    sendGAEvent('player_choice', { 
      category: 'Game',
      label: choice
    });
  },

  /**
   * 游戏结果
   * @param result 游戏结果（胜利、失败、平局）
   */
  gameResult: (result: string) => {
    sendGAEvent('game_result', { 
      category: 'Game',
      label: result
    });
  },

  /**
   * 连胜次数
   * @param count 连胜次数
   */
  winStreak: (count: number) => {
    sendGAEvent('win_streak', { 
      category: 'Game',
      value: count
    });
  }
}; 