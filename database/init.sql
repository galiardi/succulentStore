create database suculentasdb;

create table boxes(
  box_id char(8) primary key,
  image_url varchar(200) unique not null,
  reserved boolean not null,
  sold boolean not null
);

create table users(
  user_id char(8) primary key,
  name varchar(50),
  userName varchar(20) unique not null,
  email varchar(50) unique not null,
  phoneNumber varchar(20)
);
