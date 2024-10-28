import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Relation {
  @PrimaryGeneratedColumn()
  id: number;
  /* First Tab */

  @Column({ type: 'varchar', length: 50 })
  code: string;

  @Column({ type: 'varchar', length: 50 })
  referenceCode: string;

  @Column({ type: 'varchar', length: 50 })
  companyName: string;

  @Column({ type: 'varchar', length: 50 })
  country: string;

  @Column({ type: 'varchar', length: 50 })
  emailReminder: string;

  @Column({ type: 'varchar', length: 50 })
  emailInvoice: string;

  @Column({ type: 'varchar', length: 50 })
  group: string;

  @Column({ type: 'varchar', length: 50 })
  tag: string;

  @Column({ type: 'varchar', length: 50 })
  externalId: string;

  // regarding contract
  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Column({ type: 'varchar', length: 50 })
  telephone: string;

  @Column({ type: 'varchar', length: 50 })
  mobile: string;

  /* Second Tab */
  @Column({ type: 'varchar', length: 50 })
  location: string;

  /* Third Tab */
  @Column({ type: 'varchar', length: 50 })
  payment: string;
}
