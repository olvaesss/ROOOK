-- AlterTable
CREATE SEQUENCE news_id_news_seq;
ALTER TABLE "News" ALTER COLUMN "ID_NEWS" SET DEFAULT nextval('news_id_news_seq');
ALTER SEQUENCE news_id_news_seq OWNED BY "News"."ID_NEWS";
