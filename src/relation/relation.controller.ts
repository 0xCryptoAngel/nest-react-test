import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { RelationService } from './relation.service';
import { CreateRelationDto } from './dto/create-relation.dto';
import { UpdateRelationDto } from './dto/update-relation.dto';

@Controller('relation')
export class RelationController {
  constructor(private readonly relationService: RelationService) {}

  @Post()
  async create(@Body() createRelationDto: CreateRelationDto) {
    return this.relationService.createRelation(createRelationDto);
  }

  @Get()
  async findAll() {
    return this.relationService.findAllRelations();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const relation = await this.relationService.viewRelation(+id);
    if (!relation) {
      throw new NotFoundException(`Relation with ID ${id} not found`);
    }
    return relation;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRelationDto: UpdateRelationDto,
  ) {
    const updatedRelation = await this.relationService.updateRelation(
      +id,
      updateRelationDto,
    );
    if (!updatedRelation) {
      throw new NotFoundException(`Relation with ID ${id} not found`);
    }
    return updatedRelation;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.relationService.removeRelation(+id);
    if (!result || result.affected === 0) {
      throw new NotFoundException(`Relation with ID ${id} not found`);
    }
    return { message: 'Relation successfully deleted', result };
  }
}
