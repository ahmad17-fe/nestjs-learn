import { Injectable } from '@nestjs/common';
import { Hero } from './entities/hero.entity';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Injectable()
export class HeroService {
  private readonly heroes: Hero[] = [
    {
      id: 1,
      name: 'Alucard',
      type: 'Fighter/Assassin',
      image: '..',
    },
    {
      id: 2,
      name: 'Zilong',
      type: 'Fighter/Assassin',
      image: '..',
    },
    {
      id: 3,
      name: 'Kaja',
      type: 'Tank',
      image: '..',
    },
  ];

  get(): Hero[] {
    return this.heroes;
  }

  create(hero: Hero) {
    this.heroes.push(hero);
  }

  findById(id: number): Hero | -1 {
    const getIndex = this.heroes.findIndex((val) => val.id === id);
    if (getIndex !== -1) {
      return this.heroes[getIndex];
    } else {
      return -1;
    }
  }

  update(id: number, hero: UpdateHeroDto): boolean {
    const getIndex = this.heroes.findIndex((val) => val.id === id);
    if (getIndex != -1) {
      const updatedHero: Hero = {
        ...this.heroes[getIndex],
        ...hero,
      };
      this.heroes[getIndex] = updatedHero;
      return true;
    } else {
      return false;
    }
  }

  delete(id: number): boolean {
    const getIndex = this.heroes.findIndex((val) => val.id === id);
    if (getIndex != -1) {
      this.heroes.splice(getIndex, 1);
      return true;
    } else {
      return false;
    }
  }
}
