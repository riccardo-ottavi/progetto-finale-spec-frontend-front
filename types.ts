export type Pokemon = {
  id:number;
  title: string;            
  category: string;             
  primaryType: string;      
  secondaryType?: string;    
  attackType: "Fisico" | "Speciale";  
  baseStats: {               
    hp: number;
    attack: number;
    defence: number;
    specialAttack: number;
    specialDefence: number;
    speed: number;
  };
  description: string;       
  image: string;     
  createdAt: string;
  updatedAt: string;        
};