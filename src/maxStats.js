const MAX_GEN1_STATS = {
  hp: Number(import.meta.env.VITE_MAX_HP),
  attack: Number(import.meta.env.VITE_MAX_ATTACK),
  defense: Number(import.meta.env.VITE_MAX_DEFENSE),
  specialAttack: Number(import.meta.env.VITE_MAX_SPECIAL_ATTACK),
  speed: Number(import.meta.env.VITE_MAX_SPEED),
};

export default MAX_GEN1_STATS;