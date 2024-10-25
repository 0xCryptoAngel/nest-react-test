import { PartialType } from '@nestjs/mapped-types';
import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateIf,
} from 'class-validator';
import { CreateRelationDto } from './create-relation.dto';

export class UpdateRelationDto extends PartialType(CreateRelationDto) {
  // Making all properties optional for update but adding specific constraints if necessary

  @IsOptional()
  @IsString()
  @MinLength(2, { message: 'Code must have at least 2 characters.' })
  @MaxLength(50, { message: 'Code must be at most 50 characters.' })
  code?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  referenceCode?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  companyName?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Please provide a valid email address.' })
  @MaxLength(50)
  emailReminder?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Please provide a valid invoice email address.' })
  @MaxLength(50)
  emailInvoice?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  group?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  tag?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  externalId?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  title?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Please provide a valid email address.' })
  @MaxLength(50)
  email?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  telephone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  mobile?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  location?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  payment?: string;
}
