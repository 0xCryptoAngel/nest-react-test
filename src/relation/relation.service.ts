import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRelationDto } from './dto/create-relation.dto';
import { UpdateRelationDto } from './dto/update-relation.dto';
import { Relation } from './entities/relation.entity';

@Injectable()
export class RelationService {
  /**
   * Injects Relation repository for data mapper approach.
   * Active Record is another alternative.
   */
  constructor(
    @InjectRepository(Relation)
    private readonly relationRepository: Repository<Relation>,
  ) {}

  /**
   * Creates a new relation in the Relation entity.
   * @param createRelationDto expected data structure for creating a relation.
   * @returns Promise of the created relation.
   */
  async createRelation(
    createRelationDto: CreateRelationDto,
  ): Promise<Relation> {
    const relation = this.relationRepository.create(createRelationDto);
    return this.relationRepository.save(relation);
  }

  /**
   * Fetches all relations from the database.
   * @returns Promise array of all relations.
   */
  findAllRelations(): Promise<Relation[]> {
    return this.relationRepository.find();
  }

  /**
   * Fetches a relation by its ID.
   * @param id Identifier of the relation.
   * @returns Promise of the found relation or throws if not found.
   */
  async viewRelation(id: number): Promise<Relation> {
    const relation = await this.relationRepository.findOne({ where: { id } });
    if (!relation) {
      throw new NotFoundException(`Relation with ID ${id} not found`);
    }
    return relation;
  }

  /**
   * Updates an existing relation by ID.
   * @param id Identifier of the relation.
   * @param updateRelationDto Data to update the relation.
   * @returns Promise of the updated relation.
   */
  async updateRelation(
    id: number,
    updateRelationDto: UpdateRelationDto,
  ): Promise<Relation> {
    await this.relationRepository.update(id, updateRelationDto);
    const updatedRelation = await this.relationRepository.findOne({
      where: { id },
    });
    if (!updatedRelation) {
      throw new NotFoundException(`Relation with ID ${id} not found`);
    }
    return updatedRelation;
  }

  /**
   * Deletes a relation by ID.
   * @param id Identifier of the relation.
   * @returns Promise object with the count of affected rows.
   */
  async removeRelation(id: number): Promise<{ affected?: number }> {
    const result = await this.relationRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Relation with ID ${id} not found`);
    }
    return result;
  }
}
