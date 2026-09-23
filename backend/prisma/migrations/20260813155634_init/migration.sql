-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL, -- 1-G
    "title" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT false, -- 1-G
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
