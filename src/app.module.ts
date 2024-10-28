import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
      entities: [Relation],
      database: 'pgWithNest',
      synchronize: true,
      logging: true,
    }),
    RelationModule,
    // AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
