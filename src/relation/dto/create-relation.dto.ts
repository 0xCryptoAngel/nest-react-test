import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
  MaxLength,
} from 'class-validator';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

export class CreateRelationDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2, { message: 'Code must have at least 2 characters.' })
  @MaxLength(50, { message: 'Code must be at most 50 characters.' })
  code: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  referenceCode: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  companyName: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please provide a valid email address.' })
  @MaxLength(50)
  emailReminder: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please provide a valid invoice email address.' })
  @MaxLength(50)
  emailInvoice: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  group: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  tag: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  externalId: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  title: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please provide a valid email address.' })
  @MaxLength(50)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  telephone: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  mobile: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  location: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  payment: string;
}
