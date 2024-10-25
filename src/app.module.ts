import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
// import { AuthModule } from './auth/auth.module';
import { User } from './user/entities/user.entity';
import { Relation } from './relation/entities/relation.entity';
import { RelationModule } from './relation/relation.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '12345678',
      username: 'postgres',
      entities: [User, Relation],
      database: 'pgWithNest',
      synchronize: true,
      logging: true,
    }),
    UserModule,
    RelationModule,
    // AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
