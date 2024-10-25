import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelationService } from './relation.service';
import { RelationController } from './relation.controller';
import { Relation } from './entities/relation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Relation])],
  providers: [RelationService],
  controllers: [RelationController],
})
export class RelationModule {}
