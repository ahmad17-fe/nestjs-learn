import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { HeroModule } from './hero/hero.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [UserModule, HeroModule, RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
