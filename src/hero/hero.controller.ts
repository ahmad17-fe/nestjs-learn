import { Request, Response } from 'express';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  index(@Res() res: Response) {
    res.status(200).send(this.heroService.get());
  }

  @Post()
  create(
    @Body() heroDto: CreateHeroDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      this.heroService.create(heroDto);
    } catch (error: any) {
      res.status(406).send(`Opps error: ${error.message}`);
    }
  }

  @Get(':id')
  find(
    // @Param() params: any,
    @Param('id') id: string,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const hero = this.heroService.findById(Number(id));
    if (hero === -1) {
      res.status(404).json('Data hero not found!');
    } else {
      res.status(200).json(hero);
    }
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() heroDto: UpdateHeroDto,
    @Res() res: Response,
  ) {
    const result = this.heroService.update(Number(id), heroDto);
    if (result) {
      res.status(200).send(`Success update hero with id ${id}`);
    } else {
      res.status(404).send('Hero not found!');
    }
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Res() res: Response) {
    const heroExis = this.heroService.delete(Number(id));
    if (heroExis) {
      res.status(200).send(`Success delete hero with id ${id}`);
    } else {
      res.status(404).send('Hero not found!');
    }
  }
}
