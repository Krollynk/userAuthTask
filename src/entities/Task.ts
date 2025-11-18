import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("task", { schema: "tasksdb" })
export class Task {
  @PrimaryGeneratedColumn({ type: "int", name: "taskId" })
  taskId: number;

  @Column("varchar", { name: "taskNombre", length: 255 })
  taskNombre: string;

  @Column("text", { name: "taskDescripcion" })
  taskDescripcion: string;

  @Column("varchar", { name: "taskEstatus", length: 255 })
  taskEstatus: string;

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
