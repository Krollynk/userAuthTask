import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users", { schema: "tasksdb" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "userId" })
  userId: number;

  @Column("varchar", { name: "userEmail", length: 255 })
  userEmail: string;

  @Column("varchar", { name: "userPassword", length: 255 })
  userPassword: string;

  @Column("varchar", { name: "userName", length: 255 })
  userName: string;

  @Column("varchar", { name: "userLastName", length: 255 })
  userLastName: string;

  @Column("varchar", { name: "userRol", length: 255 })
  userRol: string;

  @Column("varchar", { name: "userStatus", length: 255 })
  userStatus: string;

  @Column("datetime", {
    name: "createAt",
    default: () => "'CURRENT_TIMESTAMP(6)'",
  })
  createAt: Date;

  @Column("datetime", {
    name: "updateAt",
    default: () => "'CURRENT_TIMESTAMP(6)'",
  })
  updateAt: Date;
}
