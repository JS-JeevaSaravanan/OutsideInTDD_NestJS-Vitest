CREATE TABLE "movies" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"released_on" date NOT NULL,
	"director" varchar(255) NOT NULL,
	"budget" numeric(12, 2) NOT NULL,
	"made" numeric(12, 2) NOT NULL,
	"rating" integer NOT NULL
);
